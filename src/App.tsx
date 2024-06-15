import SocialLinkProfile from "./components/core";

function App() {

  return (
    <div className="flex justify-center items-center h-screen bg-black-off">
      <SocialLinkProfile.Root>
          <SocialLinkProfile.Avatar url="" />
          <SocialLinkProfile.ProfileInfo>
              <SocialLinkProfile.Typography.Name>Abdul Badamasi</SocialLinkProfile.Typography.Name>
              <SocialLinkProfile.Typography.Location>Kaduna, Nigeria</SocialLinkProfile.Typography.Location>
          </SocialLinkProfile.ProfileInfo>
          <SocialLinkProfile.Typography.BodyText>"Front-end developer and avid reader"</SocialLinkProfile.Typography.BodyText>
          <SocialLinkProfile.LinksRoot>
              <SocialLinkProfile.Links href="https://github.com/papilo-cloud">Github</SocialLinkProfile.Links>
              <SocialLinkProfile.Links>Frontend Mentor</SocialLinkProfile.Links>
              <SocialLinkProfile.Links>LinkedIn</SocialLinkProfile.Links>
              <SocialLinkProfile.Links>Twitter</SocialLinkProfile.Links>
          </SocialLinkProfile.LinksRoot>
      </SocialLinkProfile.Root>
    </div>
  )
}

export default App
