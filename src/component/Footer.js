import React, {PureComponent} from 'react';

class Footer extends PureComponent {
  render() {
    return (
      <div>
        <footer className="bg-dark bottom-0 text-muted w-100">
          <div className="container">
            <p className="float-right">
              <a href="/">Back to top</a>
            </p>
            <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
            <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="/">getting
              started guide</a>.</p>
          </div>
        </footer>
      </div>
    );
  }
}

Footer.propTypes = {};

export default Footer;