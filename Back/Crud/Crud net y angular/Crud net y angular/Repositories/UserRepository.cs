using System;
using Crud_net_y_angular.Data;
using Crud_net_y_angular.Models;
using Crud_net_y_angular.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Crud_net_y_angular.Repositories
{
        public class UserRepository : IUserRepository
        {
            private readonly AppDbContext _context;

            public UserRepository(AppDbContext context)
            {
                _context = context;
            }

            public async Task<IEnumerable<UserEntity>> GetAllAsync()
            {
                return await _context.Users.ToListAsync();
            }

            public async Task<UserEntity> GetByIdAsync(int id)
            {
                return await _context.Users.FindAsync(id);
            }

            public async Task AddAsync(UserEntity user)
            {
                await _context.Users.AddAsync(user);
                await _context.SaveChangesAsync();
            }

            public async Task UpdateAsync(UserEntity user)
            {
                _context.Users.Update(user);
                await _context.SaveChangesAsync();
            }

            public async Task DeleteAsync(int id)
            {
                var user = await _context.Users.FindAsync(id);
                if (user != null)
                {
                    _context.Users.Remove(user);
                    await _context.SaveChangesAsync();
                }
            }
        }
}