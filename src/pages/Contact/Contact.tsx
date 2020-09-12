import React from 'react';

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Contact: React.FunctionComponent = (props) => {
  return(
    <div>
      <div>
        <h1>I am a Contact page</h1>
      </div>

      <div id="disclaimer">
        <h3>Disclaimer (Bob)</h3>
        <p>
          Disclaimer: Like any physical sport, martial arts always carry the possibility of injury. The author and publisher accept no responsibility for any injury incurred in their pursuit. Besides seeking proper “hands-on” instruction, in the event of any doubts concerning possible stress or strain to the student a physician should be consulted for assurance that no instructions contained herein are counter-indicated by the reader’s physical condition.
        </p>
      </div>

      <div id="privacy">
        <h3>Data privacy</h3>
        <p>
          This website collects no data, exceeding all data protection standards
        </p>
        <p>
          However, there are links to external sites, such as Google maps and YouTube. 
          These may be able to collect information, based on 3rd party cookies stored on your web browser from other web pages you have visited.
        </p>
        <p>
          This is, unfortunately, part of how the modern internet operates and provides funding for the services we use on a daily basis, such as web browsers, search 
          engines, videos (YouTube) and social media. 
        </p>
        <p>
          It is not as sinister as it sounds, this information is only used to target advertising for you. 
          This website has no advertising, which is the source of most of the issues in data privacy. The links to social media on this web site are simple links, and do
          not send any information to Facebook or Meetup. This makes it a little harder for you to share on social media, and you will have to take an extra step to "like" us.
        </p>
      </div>
    </div>
    
  );
}

export default Contact;