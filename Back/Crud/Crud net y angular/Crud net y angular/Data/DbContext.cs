﻿using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Crud_net_y_angular.Models;

namespace Crud_net_y_angular.Data
{
        public class AppDbContext : DbContext
        {
            public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
            {
            }

            public DbSet<UserEntity> Users { get; set; }

            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                base.OnModelCreating(modelBuilder);
                modelBuilder.Entity<UserEntity>(entity =>
                {
                    entity.HasKey(e => e.Id);
                    entity.Property(e => e.Username).IsRequired().HasMaxLength(50);
                    entity.Property(e => e.Email).IsRequired().HasMaxLength(100);

                    entity.HasIndex(e => e.Email).IsUnique();
                });
            }
        }
}