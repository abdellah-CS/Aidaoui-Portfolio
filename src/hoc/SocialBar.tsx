import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';

const SocialBar: React.FC = () => {

  return (
    <div className='text-white flex flex-col justify-center h-screen fixed left-0 top-0 z-10'>
        <ul>
            <li className='flex w-44 h-16 justify-between items-center rounded-lg'>
                <a className='flex justify-around items-center w-full rounded-lg h-14 bg-sky-600 font-semibold ml-[-110px] hover:ml-[0px] duration-500' href="https://www.linkedin.com/in/aidaoui-abdellah-a29633258/" target="_blank">LinkedIn <LinkedInIcon fontSize="large"/></a>
            </li>
            <li className='flex w-44 h-16 justify-between items-center rounded-lg'>
                <a className='flex justify-around items-center w-full rounded-lg h-14 bg-gray-900 font-semibold ml-[-110px] hover:ml-[0px] duration-500' href="https://github.com/abdellah-CS" target="_blank">Github <GitHubIcon fontSize="large"/></a>
            </li>
            <li className='flex w-44 h-16 justify-between items-center rounded-lg'>
                <a className='flex justify-around items-center w-full rounded-lg h-14 bg-red-900 font-semibold ml-[-110px] hover:ml-[0px] duration-500' href="contact">Gmail <EmailIcon fontSize="large"/></a>
            </li>
            <li className='flex w-44 h-16 justify-between items-center rounded-lg'>
                <a className='flex justify-around items-center w-full rounded-lg h-14 bg-cyan-500 font-semibold ml-[-110px] hover:ml-[0px] duration-500' href="https://t.me/AbdellahCS" target="_blank">Telegram <TelegramIcon fontSize="large"/></a>
            </li>
        </ul>
    </div>
  );
};

export default SocialBar;
