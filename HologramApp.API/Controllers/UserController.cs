using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using System.Threading.Tasks;
using HologramApp.API.Dtos;
using HologramApp.API.Data;
using HologramApp.API.Models;
using System;
using System.Collections.Generic;

namespace HologramApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IAuthRepository _userrepo;
        private readonly IMapper _mapper;

        public UserController(IAuthRepository userrepo, IMapper mapper)
        {
            _mapper = mapper;
            _userrepo = userrepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userrepo.GetAllUser();

            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> FindUser(int id)
        {
            var user = await _userrepo.FindUser(id);

            var usersToReturn = _mapper.Map<UserDto>(user);

            return Ok(usersToReturn);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(UserDto userDto)
        {
            var user = await _userrepo.FindUser(userDto.Id);
            if (user == null)
                return BadRequest("User not found");

                // only allow admins to access other user records
            var currentUser = User.Identity.Name;
            if (userDto.Username != currentUser && !User.IsInRole(Role.Admin)) {
                return Forbid();
            }

            var usersToUpdate = _mapper.Map<User>(userDto);
            usersToUpdate.PasswordHash = user.PasswordHash;
            usersToUpdate.PasswordSalt = user.PasswordSalt;
            usersToUpdate.Role = user.Role;
            usersToUpdate.LastActive = DateTime.Now;

            if (await _userrepo.UpdateUser(usersToUpdate))
                return NoContent();

            throw new Exception($"Updating user {userDto.Id} failed on save");
        }
    }
}