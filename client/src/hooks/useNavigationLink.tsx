import { useNavigate } from 'react-router-dom';

export const useNavigationLink = () => {
  const navigate = useNavigate();

  const navigationLink = (name: String): void => {
    switch (name) {
      case '강의실':
        navigate('/admin/schedule/classroom', { replace: true });
        break;
      case '숙소':
        navigate('/admin/schedule/room', { replace: true });
        break;
      case '설문 생성':
        navigate('/admin/survey/create', { replace: true });
        break;
      case '설문 리스트':
        navigate('/admin/survey/list', { replace: true });
        break;
    }
  };

  return navigationLink;
};
