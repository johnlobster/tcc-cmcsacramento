import React from 'react'

import EditBlock from "../../components/EditBlock/EditBlock"

// import spyVsSpy from "../../images/spyvsspy.png"

export const TccSecrets: React.FunctionComponent = () => {

return (
  
  <EditBlock id="intermediate_secrets" draft >
    As you progress, you will become familiar with the following not so secret secrets
    <ul>
      <li>
        Separating people and skills into beginner, intermediate and advanced is
        arbitrary.
        Tai Chi has no testings, rankings, uniforms, colored belts or belt testing fees.
      </li>
      <li>
        Your form will never be perfect.
        Whenever you learn something new, it can be put into the form. 
        There is no end to learning new things about Tai chi
      </li>
      <li>
        There are many different aspects of Tai Chi. Everyone progresses at a different
        rate through each aspect.
        Finding people with better skills in an aspect is an opportunity to learn, not a
        time to despair about your abilities
      </li>
      <li>
        Your understanding of principles changes. A new definition may conflict with your previous knowledge.
        Expect your mind to be blown on a regular basis
      </li>
      <li>
        There is no separation between Tai Chi for health, and Tai Chi as a martial art.
        As you progress in any aspect of Tai chi, the health benefits will increase
      </li>
      <li>
        The (internal) aspects of Tai chi are what is important. 
        New forms (or related martial arts) will not contain additional material and so
        the number of forms that you know is not related to your ability in Tai chi
      </li>
    </ul>
  </EditBlock>
  )
}

export const SecretsCard = (
  <div >
    {/* <img src={spyVsSpy} alt="Spy vs Spy - apologies to Mad magazine" width={500} /> */}
    <h4>Some not so secret secrets of Tai chi</h4>
  </div>
)