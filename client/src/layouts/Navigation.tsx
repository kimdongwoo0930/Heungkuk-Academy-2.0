import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegClock } from 'react-icons/fa';
import { MdOutlineHowToVote } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

// 아이콘
import React, { useState } from 'react';
import {
  Block,
  DetailMenuItem,
  IconBox,
  ListBox,
  LogoContainer,
  SideBar,
  Title,
} from '../styles/NavigationStyle';

import { MenuItem } from '../types/navigationType';
import { useNavigationLink } from '../hooks/useNavigationLink';

const Menu: MenuItem[] = [
  {
    name: '홈',
    path: '/home',
    icon: <AiOutlineHome color="white" size={25} />,
  },
  {
    name: '예약',
    icon: <FaRegClock color="white" size={25} />,
  },
  {
    name: '설문조사',
    icon: <MdOutlineHowToVote color="white" size={25} />,
  },
];

// const MenuDetail:MenuDetailItem = {
// }

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  return <OpenMenu open={open} setOpen={setOpen} />;
};

/**
 *
 * 컴포넌트 부분
 */

/**
 * 열렸을때 로고
 * @returns
 */
const OpenLogo = ({ open }: { open: boolean }) => {
  return (
    <LogoContainer>
      <Block width={15} heigh={15} rotate={0} x={5} y={10} />
      <Block width={15} heigh={15} rotate={0} x={5} y={30} />
      <Block width={25} heigh={25} rotate={45} x={30} y={15} />
      {open && (
        <>
          <p className="absolute left-16 top-0 text-2xl font-bold text-[#ffffff]  ">
            Heungkuk
          </p>
          <p className="absolute left-16 top-8 text-xs text-[#ffffff] font-extrabold">
            관리자 페이지
          </p>
        </>
      )}
    </LogoContainer>
  );
};

/**
 * 메뉴 열렸을때
 * @param param0
 * @returns
 */
const OpenMenu = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  const navigate = useNavigate();
  const [onMouse, setOnMouse] = useState(false);
  const navigationLink = useNavigationLink();

  /** 메뉴 오픈 여부 */
  const [openSchedule, setOpenSchedule] = useState(false);
  const [openSurvey, setOpenSurvey] = useState(false);
  const handleClick = (name: String): any => {
    if (name === '예약') {
      setOpenSchedule((prev) => !prev);
    } else if (name === '설문조사') {
      setOpenSurvey((prev) => !prev);
    } else if (name === '홈') {
      navigate('/admin', { replace: true });
    }
  };

  return (
    <SideBar
      width={open ? 250 : 80}
      onMouse={open}
      onMouseLeave={() => setOpen(false)}
      onMouseEnter={() => setOpen(true)}
    >
      <OpenLogo open={open} />
      {Menu.map((item) => {
        return (
          <>
            <ListBox
              open={open}
              style={
                (item.name === '예약' && openSchedule) ||
                (item.name === '설문조사' && openSurvey)
                  ? {
                      opacity: 1,
                      backgroundColor: '#533f7c',
                      borderRadius: '10px',
                    }
                  : {}
              }
              onClick={() => handleClick(item.name)}
              onMouseEnter={() => setOnMouse(true)}
              onMouseLeave={() => setOnMouse(false)}
            >
              {item.icon}
              {open && (
                <>
                  <Title name={item.name}>{item.name}</Title>
                  {item.name === '예약' && !openSchedule ? (
                    <IoMdArrowDropdown color="white" />
                  ) : item.name === '예약' && openSchedule ? (
                    <IoMdArrowDropup color="white" />
                  ) : item.name === '설문조사' && !openSurvey ? (
                    <IoMdArrowDropdown color="white" />
                  ) : item.name === '설문조사' && openSurvey ? (
                    <IoMdArrowDropup color="white" />
                  ) : (
                    <></>
                  )}
                </>
              )}
            </ListBox>
            {open && (
              <>
                {item.name === '예약' && openSchedule && (
                  <div className="w-[100px]">
                    <DetailMenuItem onClick={() => navigationLink('강의실')}>
                      강의실
                    </DetailMenuItem>
                    <DetailMenuItem onClick={() => navigationLink('숙소')}>
                      숙소
                    </DetailMenuItem>
                    <DetailMenuItem onClick={() => navigationLink('식수')}>
                      식수
                    </DetailMenuItem>
                  </div>
                )}
                {item.name === '설문조사' && openSurvey && (
                  <div className="w-[100px]">
                    <DetailMenuItem onClick={() => navigationLink('설문 생성')}>
                      설문 생성
                    </DetailMenuItem>
                    <DetailMenuItem
                      onClick={() => navigationLink('설문 리스트')}
                    >
                      설문 리스트
                    </DetailMenuItem>
                  </div>
                )}
              </>
            )}
          </>
        );
      })}
    </SideBar>
  );
};

// /**
//  * 메뉴 닫혔을때
//  * @param param0
//  * @returns
//  */
// const CloseMenu = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
//   return (
//     <SideBar width={80} onMouse={open} onMouseEnter={() => setOpen(true)}>
//       <CloseLogo />
//       {Menu.map((item) => {
//         return <IconBox>{item.icon}</IconBox>;
//       })}
//     </SideBar>
//   );
// };

// const CloseLogo = () => {
//   return (
//     <LogoContainer>
//       <Block width={15} heigh={15} rotate={0} x={5} y={10} />
//       <Block width={15} heigh={15} rotate={0} x={5} y={30} />
//       <Block width={25} heigh={25} rotate={45} x={30} y={15} />
//     </LogoContainer>
//   );
// };
