import {Div, Div2, Img, List, Button, Para, Navigate} from './Trendcardpg'

const TrendCard = props => {
  const {each} = props
  const {id, profileImg, date, name, Views, thumbnail, title} = each

  return (
    <Navigate to={`/videos/${id}`}>
      <List>
        <Div>
          <Button type="button">
            <Img src={thumbnail} alt={name} />
          </Button>
          <Div2>
            <Para>{title}</Para>
            <Para colo="#94a3b8">{name}</Para>
            <Para colo="#94a3b8">
              {Views}.{date}
            </Para>
          </Div2>
        </Div>
      </List>
    </Navigate>
  )
}

export default TrendCard
