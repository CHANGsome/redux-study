import * as React from 'react';
import './index.less';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';
import { observer } from 'mobx-react';
import personalStore from '../../store/personalStore';
import voteStore from '../../store/voteStore';
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

const Vote = observer(() => {
  const { supportNum, oppositeNum, modalVisible, changeModalVisible } =
    voteStore;

  return (
    <div className='vote-box'>
      <div className='header'>
        <h2 className='title'>学习Redux真好玩{personalStore.info.title}</h2>
        <span className='num'>{supportNum + oppositeNum}</span>
      </div>
      <Button onClick={() => changeModalVisible(true)}>modal</Button>
      <VoteMain />
      <VoteFooter />

      <Modal open={modalVisible} title='a test modal'>
        <div>hhh</div>
        <Link to='/personal'>to personal</Link>
      </Modal>
    </div>
  );
});

export default Vote;
