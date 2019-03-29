using AutoMapper;
using HologramApp.API.Dtos;
using HologramApp.API.Models;

namespace HologramApp.API.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
            CreateMap<User, UserForListDto>();
        }
    }
}