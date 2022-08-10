﻿using AutoMapper;
using G4L.UserManagement.BL.Custom_Exceptions;
using G4L.UserManagement.BL.Entities;
using G4L.UserManagement.BL.Interfaces;
using G4L.UserManagement.BL.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BCryptNet = BCrypt.Net.BCrypt;

namespace G4L.UserManagement.Infrustructure.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private ITokenService _tokenService;
        private readonly IMapper _mapper;

        public UserService(IUserRepository userRepository, ITokenService tokenService,
          IMapper mapper)
        {
            _userRepository = userRepository;
            _tokenService = tokenService;
            _mapper = mapper;
        }

        public async Task RegisterUserAsync(RegisterRequest model)
        {
            await _userRepository.CreateUserAsync(model);
        }

        public async Task<AuthenticateResponse> AuthenticateUserAsync(AuthenticateRequest model)
        {
            var user = await _userRepository.GetByUserByEmailAsync(model.Email);

            // validate
            if (user == null || !BCryptNet.Verify(model.Password, user.PasswordHash))
                throw new AppException("Username or password is incorrect");

            // authentication successful
            var response = _mapper.Map<AuthenticateResponse>(user);
            response.Token = _tokenService.GenerateToken(user);
            return response;
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return await _userRepository.ListAsync();
        }

        public async Task DeleteUserAsync(Guid id)
        {
            await _userRepository.DeleteAsync(id);
        }


        public async Task<User> GetUserAsync(string email)
        {
            return await _userRepository.GetByUserByEmailAsync(email);
        }


        public async Task<User> GetUserByIdAsync(Guid id)
        {
            return await _userRepository.GetByIdAsync(id);
        }

        public Task UpdateUserAsync(User entity)
        {
            return _userRepository.UpdateAsync(entity);

        }
    }
}
