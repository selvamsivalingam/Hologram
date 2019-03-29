using System;
using System.ComponentModel.DataAnnotations;

namespace HologramApp.API.Dtos
{
    public class UserDto
    {
        public int Id { get; set; }

        [Required]
        public string Firstname { get; set; }

        [Required]
        public string Lastname { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        [StringLength(10, MinimumLength = 6, ErrorMessage = "Password must be between 6 and 10 characters")]
        public string Password { get; set; }
        [Required]
        public string Role { get; set;}        
        public DateTime? Created { get; set; }
        public DateTime? LastActive { get; set; }
        public string Province { get; set; }
        public string Country { get; set; }
        public string Zip { get; set; }
    }
}