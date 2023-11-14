import {List, Para, Div, Img, Navigate} from './GameCardpg'

const GameCard = props => {
  const {each} = props
  const {thumbnail, Views, title, id} = each

  return (
    <Navigate to={`/videos/${id}`}>
      <List>
        <Img src={thumbnail} alt="video thumbnail" />
        <Para>{title}</Para>
        <Div color="#94a3b8">
          <Para>{Views} Watching Worldwide</Para>
        </Div>
      </List>
    </Navigate>
  )
}

export default GameCard
