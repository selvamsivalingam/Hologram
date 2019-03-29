using System.Collections.Generic;
using System.Threading.Tasks;
using HologramApp.API.Models;

namespace HologramApp.API.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExists(string username);
        Task<User> FindUser(int id);
        Task<List<User>> GetAllUser();
        Task<bool> UpdateUser(User user);
    }
}