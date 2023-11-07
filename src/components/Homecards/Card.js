import {List, DetailsDiv, ProImg, Name, Details, Img, Navigate} from './Cardpg'
import CartContext from '../../NXT.JS/Nxt'

const Cards = props => (
  <CartContext.Consumer>
    {value => {
      const {isdark} = value
      const {each} = props
      const {id, profileImg, date, name, Views, thumbnail, title} = each

      const color = isdark ? '#ffffff' : '#0f0f0f'

      return (
        <Navigate to={`/videos/${id}`}>
          <List color={color}>
            <Img src={thumbnail} alt="video thumbnail" />
            <Details>
              <ProImg src={profileImg} alt="channel logo" />
              <DetailsDiv>
                <Name>{title}</Name>
                <Name>{name}</Name>
                <Details>
                  <Name>
                    {Views}K views . {date}
                  </Name>
                </Details>
              </DetailsDiv>
            </Details>
          </List>
        </Navigate>
      )
    }}
  </CartContext.Consumer>
)

export default Cards
