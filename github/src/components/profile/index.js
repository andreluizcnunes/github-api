import React from 'react'
import useGithub from '../../hooks/github-hooks'
import * as S from './styled'

const Profile = () => {
  const { githubState } = useGithub()
  return (
    <S.Wrapper>
      <S.WrapperImage
        src={githubState.user.avatar}
        alt="photography of user the github"
      />
      <S.WrapperInfoUser>
        <h1>{githubState.user.name}</h1>

        <S.WrapperGeneric>
          <h3>Username:</h3>
          <a href={githubState.user.html_url} target="_blank" rel="noreferrer">
            {githubState.user.login}
          </a>
        </S.WrapperGeneric>

        <S.WrapperGeneric>
          <h3>Company:</h3>
          <span>{githubState.user.company}</span>
        </S.WrapperGeneric>

        <S.WrapperGeneric>
          <h3>Location:</h3>
          <span>{githubState.user.location}</span>
        </S.WrapperGeneric>

        <S.WrapperGeneric>
          <h3>Blog:</h3>
          <a href={githubState.user.blog} target="_blank" rel="noreferrer">
            {githubState.user.blog}
          </a>
        </S.WrapperGeneric>

        <S.WrapperStatusCount>
          <S.WrapperStatusCountItems>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </S.WrapperStatusCountItems>

          <S.WrapperStatusCountItems>
            <h4>Followinds</h4>
            <span>{githubState.user.following}</span>
          </S.WrapperStatusCountItems>

          <S.WrapperStatusCountItems>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </S.WrapperStatusCountItems>

          <S.WrapperStatusCountItems>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </S.WrapperStatusCountItems>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile
