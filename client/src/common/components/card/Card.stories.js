import React from 'react'
import Card from './Card'
import moment from 'moment'

import { Light, Dark } from 'common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'Card' }

export const card = () => (
  <Light>
    <Card
      isStarred
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
    />
  </Light>
)

export const cardPinkLight = () => (
  <Light>
    <Card
      isStarred
      colour="pink"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
    />
  </Light>
)

export const cardPinkDark = () => (
  <Dark>
    <Card
      isStarred
      colour="pink"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
    />
  </Dark>
)

export const cardSalmonLight = () => (
  <Light>
    <Card
      isStarred
      colour="salmon"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
    />
  </Light>
)

export const cardSalmonDark = () => (
  <Dark>
    <Card
      isStarred
      colour="salmon"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
      tags={[
        'hello',
        'world',
        'hey',
        'ha',
        'one more here',
        'hello',
        'world',
        'hey',
        'ha',
        'one more here',
      ]}
    />
    <Card
      isStarred
      colour="salmon"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
      tags={['hello', 'world', 'hey', 'ha', 'one more here']}
    />
    <Card
      isStarred
      colour="salmon"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
    />
    <Card
      isStarred
      colour="salmon"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
      tags={[
        'hello',
        'world',
        'hey',
        'ha',
        'hello',
        'world',
        'hey',
        'ha',
        'one more here',
        'one more here',
      ]}
    />
  </Dark>
)

export const cardYellowLight = () => (
  <Light>
    <Card
      isStarred
      colour="yellow"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
      tags={['hello', 'world', 'hey', 'ha', 'one more here']}
    />
  </Light>
)

export const cardYellowDark = () => (
  <Dark>
    <Card
      isStarred
      colour="yellow"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
      tags={['hello', 'world', 'hey', 'ha', 'one more here']}
    />
  </Dark>
)

export const cardLavandaLight = () => (
  <Light>
    <Card
      isStarred
      colour="lavanda"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
      tags={['hello', 'world', 'hey', 'ha', 'one more here']}
    />
  </Light>
)

export const cardLavandaDark = () => (
  <Dark>
    <Card
      isStarred
      colour="lavanda"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
    />
  </Dark>
)

export const cardBlueLight = () => (
  <Light>
    <Card
      isStarred
      colour="blue"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
      tags={['hello', 'world', 'hey', 'ha', 'one more here']}
    />
  </Light>
)

export const cardBlueDark = () => (
  <Dark>
    <Card
      isStarred
      colour="blue"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
      tags={['hello', 'world', 'hey', 'ha', 'one more here']}
    />
  </Dark>
)

export const cardOceanBlueLight = () => (
  <Light>
    <Card
      isStarred
      colour="ocean-blue"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
      tags={['hello', 'world', 'hey', 'ha', 'one more here']}
    />
  </Light>
)

export const cardOceanBlueDark = () => (
  <Dark>
    <Card
      isStarred
      colour="ocean-blue"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
    />
  </Dark>
)

export const cardMintGreenLight = () => (
  <Light>
    <Card
      isStarred
      colour="mint-green"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
    />
  </Light>
)

export const cardMintGreenDark = () => (
  <Dark>
    <Card
      isStarred
      colour="ocean-blue"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
    />
  </Dark>
)

export const cardOliveGreenLight = () => (
  <Light>
    <Card
      isStarred
      colour="mint-green"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
    />
  </Light>
)

export const cardOliveGreenDark = () => (
  <Dark>
    <Card
      isStarred
      colour="ocean-blue"
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
    />
  </Dark>
)

export const cardDarkMode = () => (
  <Dark>
    <Card
      isStarred
      title="Hello world"
      dueDate={moment().add(1, 'day').toISOString()}
      content="hey ola que tal"
    />
  </Dark>
)
