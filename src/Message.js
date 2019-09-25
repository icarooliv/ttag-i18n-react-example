import React, {Component} from 'react';
import { t } from 'ttag';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
          {t`Hello Brazil`}
      </p>
    );
  }
}

export default Message;
