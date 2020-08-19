import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018,0,1,9,0),
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const Default = () => (
  <Task task={object('task', { ...taskData })} {...actionsData} />
);

export const Pinned = () => (
  <Task task={{...taskData, state: 'TASK_PINNED'}} {...actionsData} />
);

export const Archived = () => (
  <Task task={{...taskData, state: 'TASK_ARCHIVED'}} {...actionsData} />
);

const longTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius tellus elit, id vulputate leo semper vel. Nunc hendrerit velit eget malesuada bibendum. Morbi sed ipsum in lacus pulvinar dapibus. Vestibulum scelerisque arcu id augue lacinia placerat. Integer vitae pharetra ipsum. Suspendisse at malesuada magna. Suspendisse vitae laoreet est. Sed vitae sollicitudin velit, ac rhoncus ipsum. Vestibulum in viverra quam. Nullam sed mi varius, posuere nisi non, finibus lectus. Suspendisse finibus commodo leo, ac posuere nisi elementum a. Duis laoreet orci elementum, maximus felis quis, sollicitudin est. Sed metus dui, varius at tortor quis, sollicitudin lobortis ligula. In hac habitasse platea dictumst. ";
export const LongTitle = () => (
  <Task task={object('task', { ...taskData, title: longTitle })} {...actionsData} />
);