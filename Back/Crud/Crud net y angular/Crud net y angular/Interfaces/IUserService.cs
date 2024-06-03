using Crud_net_y_angular.Dtos;
using Crud_net_y_angular.Models;

namespace Crud_net_y_angular.Services
{
    public interface IUserService
    {
        Task<IEnumerable<UserDto>> GetAllUsersAsync();
        Task<UserDto> GetUserByIdAsync(int id);
        Task CreateUserAsync(UserDto user);
        Task<UserDto> UpdateUserAsync(UserDto user);
        Task DeleteUserAsync(int id);
    }
}