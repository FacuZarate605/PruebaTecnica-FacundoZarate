using Microsoft.AspNetCore.Mvc;
using Crud_net_y_angular.Services;
using Crud_net_y_angular.Models;
using Crud_net_y_angular.Dtos;

namespace UserManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userService.GetAllUsersAsync();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _userService.GetUserByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(UserDto user)
        {
            await _userService.CreateUserAsync(user);
            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserDto user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            var updatedUser = await _userService.UpdateUserAsync(user);
            if (updatedUser == null)
            {
                return NotFound(); 
            }

            return Ok(updatedUser); 
        }

        [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteUser(int id)
            {
                var user = await _userService.GetUserByIdAsync(id);
                if (user == null)
                {
                    return NotFound();
                }

                await _userService.DeleteUserAsync(id);
                return NoContent();
            }
    }
}