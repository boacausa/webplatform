import React, { Fragment } from 'react';
import Icon from './Icon';
import SideBar from './SideBar';

const Title = () => (
  <div className='navbar-header'>
    <a className='navbar-brand' href='#'>Área da ONG</a>
  </div>
);

const DropdownDivider = () => (
  <li className='divider' />
);

const Message = ({ name, date, content }) => (
  <Fragment>
    <li>
      <a href='#'>
        <div>
          <strong>{name}</strong>
          <span className='pull-right text-muted'>
            <em>{date}</em>
          </span>
        </div>

        <div>{content}</div>
      </a>
    </li>
    <DropdownDivider />
  </Fragment>
);

const MessagesDropdown = () => {
  const messages = [
    {
      id: 1,
      name: 'John Smith',
      date: 'Yesterday',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
    },
    {
      id: 2,
      name: 'John Smith',
      date: 'Yesterday',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
    }
  ]
  return (
    <li className='dropdown'>
        <a className='dropdown-toggle' data-toggle='dropdown' href='#'>
          <Icon name='envelope' fixedWidth/> <Icon name='caret-down'/>
        </a>

        <ul className='dropdown-menu dropdown-messages'>
          {messages.map(message => <Message key={message.id} {...message} />)}
          <li>
            <a className='text-center' href='#'>
              <strong>Read All Messages</strong>
              <Icon name='angle-right'/>
            </a>
          </li>
        </ul>
    </li>
  );
};

const Task = ({ name, percentage, type }) => (
  <Fragment>
    <li>
      <a href='#'>
        <div>
          <p>
            <strong>{name}</strong>
            <span className='pull-right text-muted'>{percentage}% Complete</span>
          </p>

          <div className='progress progress-striped active'>
            <div className={`progress-bar progress-bar-${type}`} role='progressbar' aria-valuenow={percentage} aria-valuemin='0' aria-valuemax='100' style={{ width: `${percentage}%` }}>
              <span className='sr-only'>{percentage}% Complete ({type})</span>
            </div>
          </div>
        </div>
      </a>
    </li>
    <DropdownDivider />
  </Fragment>
);

const TasksDropdown = () => {
  const tasks = [
    {
      id: 1,
      name: 'Task 1',
      percentage: 40,
      type: 'success'
    },
    {
      id: 2,
      name: 'Task 2',
      percentage: 20,
      type: 'info'
    },
    {
      id: 3,
      name: 'Task 3',
      percentage: 60,
      type: 'warning'
    },
    {
      id: 4,
      name: 'Task 4',
      percentage: 80,
      type: 'danger'
    }
  ]
  return (
    <li className='dropdown'>
      <a className='dropdown-toggle' data-toggle='dropdown' href='#'>
        <Icon name='tasks' fixedWidth/> <Icon name='caret-down'/>
      </a>

      <ul className='dropdown-menu dropdown-tasks'>
        {tasks.map(task => <Task key={task.id} {...task} />)}
        <li>
          <a className='text-center' href='#'>
            <strong>See All Tasks</strong>
            <Icon name='angle-right'/>
          </a>
        </li>
      </ul>
    </li>
  );
};

const Notification = ({ icon, content, time }) => (
  <Fragment>
    <li>
      <a href='#'>
        <div>
          <Icon name={icon} fixedWidth/> { content }
          <span className='pull-right text-muted small'>{time}</span>
        </div>
      </a>
    </li>

    <DropdownDivider />
  </Fragment>
);

const NotificationsDropdown = () => {
  const notifications = [
    {
      id: 1,
      icon: 'comment',
      content: 'New Comment',
      time: '4 minutes ago'
    },
    {
      id: 2,
      icon: 'twitter',
      content: 'New Followers',
      time: '12 minutes ago'
    },
    {
      id: 3,
      icon: 'envelope',
      content: 'Message Sent',
      time: '4 minutes ago'
    },
    {
      id: 4,
      icon: 'tasks',
      content: 'New Task',
      time: '4 minutes ago'
    },
    {
      id: 5,
      icon: 'upload',
      content: 'Server Rebooted',
      time: '4 minutes ago'
    }
  ]

  return (
    <li className='dropdown'>
      <a className='dropdown-toggle' data-toggle='dropdown' href='#'>
        <Icon name='bell' fixedWidth/> <Icon name='caret-down'/>
      </a>

      <ul className='dropdown-menu dropdown-alerts'>
        {notifications.map(notification => <Notification key={notification.id} {...notification} />)}

        <li>
          <a className='text-center' href='#'>
            <strong>See All Alerts</strong>
            <Icon name='angle-right'/>
          </a>
        </li>
      </ul>
    </li>
  )
};

const UserMenuItem = ({ icon, label, href }) => (
  <li>
    <a href={href}>
      <Icon name={icon} fixedWidth />
      {label}
    </a>
  </li>
);

const UserMenuDropdown = () => {
  return (
    <li className='dropdown'>
      <a className='dropdown-toggle' data-toggle='dropdown' href='#'>
        <Icon name='user' fixedWidth /> <Icon name='caret-down'/>
      </a>

      <ul className='dropdown-menu dropdown-user'>
        <UserMenuItem icon='user' label='User Profile' href='#' />
        <UserMenuItem icon='gear' label='Settings' href='#' />
        <DropdownDivider />
        <UserMenuItem icon='sign-out' label='Logout' href='#' />
      </ul>
    </li>
  );
}

const Actions = () => (
  <ul className='nav navbar-top-links navbar-right'>
    <MessagesDropdown />
    <TasksDropdown />
    <NotificationsDropdown />
    <UserMenuDropdown />
  </ul>
);

const NavBar = () => (
  <nav
    role='navigation'
    className='navbar navbar-default navbar-static-top'
    style={{ marginBottom: 0 }}
  >
    <Title />
    <Actions />
    <SideBar />
  </nav>
);

export default NavBar;
