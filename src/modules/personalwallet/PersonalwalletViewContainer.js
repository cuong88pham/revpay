import { compose, withState } from 'recompose';

import PersonalwalletScreen from './PersonalwalletView';

export default compose(withState('isExtended', 'setIsExtended', false))(
  PersonalwalletScreen,
);
