using Crud_net_y_angular.Repositories;
using Crud_net_y_angular.Models;
using AutoMapper;
using Crud_net_y_angular.Dtos;
using FluentValidation;

namespace Crud_net_y_angular.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly IValidator<UserDto> _validator;

        public UserService(IUserRepository userRepository, IMapper mapper, IValidator<UserDto> validator)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _validator = validator;
        }

        public async Task<IEnumerable<UserDto>> GetAllUsersAsync()
        {
            var userEntities = await _userRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<UserDto>>(userEntities);
        }

        public async Task<UserDto> GetUserByIdAsync(int id)
        {
            var userEntity = await _userRepository.GetByIdAsync(id);
            return _mapper.Map<UserDto>(userEntity);
        }

        public async Task CreateUserAsync(UserDto user)
        {
            await _validator.ValidateAndThrowAsync(user); 
            var userEntity = _mapper.Map<UserEntity>(user);
            await _userRepository.AddAsync(userEntity);
        }

        public async Task<UserDto> UpdateUserAsync(UserDto user)
        {
            var userEntity = _mapper.Map<UserEntity>(user);
            await _userRepository.UpdateAsync(userEntity);
            return user;
        }
        public async Task DeleteUserAsync(int id)
        {
            await _userRepository.DeleteAsync(id);
        }
    }
}