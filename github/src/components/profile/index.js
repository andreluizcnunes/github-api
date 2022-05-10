import React from 'react'
import * as S from './styled'

function Profile() {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/66883322?v=4"
        alt="photography of user the github"
      />
      <S.WrapperInfoUser>
        <h1>André Luiz</h1>

        <S.WrapperUserName>
          <h3>Username:</h3>
          <span>Andrélcnunes</span>
        </S.WrapperUserName>

        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>

          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>

          <div>
            <h4>Followinds</h4>
            <span>5</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile
