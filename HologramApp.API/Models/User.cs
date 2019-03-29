using System;

namespace HologramApp.API.Models
{
public class User
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Role { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Province { get; set; }
        public string Country { get; set; }
        public string Zip { get; set; }

    }
}