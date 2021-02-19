import React from 'react';

import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';


type MenuProps = {
  state?: number
  setState: (val: number) => void
}


const GlobalNav: React.FC<MenuProps> = ({ setState }): React.ReactElement => (
  <>
    <ul className='global-nav'>
      <li className='menu' onClick={() => setState(1)}>アイテムから探す</li>
      <li className='menu' onClick={() => setState(2)}>ブランドから探す</li>
      <SettingsIcon className='menu' />
      <PersonIcon className='menu' />
    </ul>
  </>
);


const MegaMenu: React.FC<MenuProps> = ({ state, setState }): React.ReactElement => (
  <div className='mega-menu'>
    <div className='mega-menu__inner'>
      <ul className='mega-menu__category'>
        {
          state === 1 && (
            <>
              <li className='mega-menu__category-nav'>
                <div className='mega-menu__category-nav-title'>アウター</div>
                <ul>
                  <li className='menu mega-menu__category-nav-sub'>アイテム1</li>
                  <li className='menu mega-menu__category-nav-sub'>アイテム2</li>
                  <li className='menu mega-menu__category-nav-sub'>アイテム3</li>
                  <li className='menu mega-menu__category-nav-sub'>アイテム4</li>
                </ul>
              </li>
              <li className='mega-menu__category-nav'>
                <div className='mega-menu__category-nav-title'>トップス</div>
                <ul>
                  <li className='menu mega-menu__category-nav-sub'>アイテム1</li>
                  <li className='menu mega-menu__category-nav-sub'>アイテム2</li>
                  <li className='menu mega-menu__category-nav-sub'>アイテム3</li>
                  <li className='menu mega-menu__category-nav-sub'>アイテム4</li>
                </ul>
              </li>
            </>
          )
        }
      </ul>
      <ul className='mega-menu__brand'>
        {
          state === 2 && (
            <>
              <li className='menu mega-menu__brand-nav'>ブランド1</li>
              <li className='menu mega-menu__brand-nav'>ブランド2</li>
              <li className='menu mega-menu__brand-nav'>ブランド3</li>
              <li className='menu mega-menu__brand-nav'>ブランド4</li>
            </>
          )
        }
      </ul>
      <button onClick={() => setState(0)}>閉じる</button>
    </div>
  </div>
);


const Header: React.FC = (): React.ReactElement => {
  const [state, setState] = React.useState(0);

  return (
    <header className='header'>
      <div className='header__inner'>
        <div className='header__logo'>My closet</div>
        <GlobalNav
          setState={setState}
        />
      </div>
      {
        state > 0 && (
          <MegaMenu
            state={state}
            setState={setState}
          />
        )
      }
    </header>
  );
};


export default Header;