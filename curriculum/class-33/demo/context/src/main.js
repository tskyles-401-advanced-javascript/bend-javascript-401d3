import React from 'react';

import SiteEditor from './components/site.js.js';
import ThemeEditor from './components/theme.js.js';
import ContentClass from './components/content-class.js.js';
import ContentFunction from './components/content-function.js.js';
import { ThemeContext } from './context/theme.js.js';

const styles = {
  dark: {
    background: '#111',
    color: 'ivory',
  },
  light: {
    background: '#f5f5f5',
    color: '#525252'
  }
}

class Main extends React.Component {

  static contextType = ThemeContext;

  render() {
    return (
      <main style={styles[this.context.mode]}>
        <section>
          <ContentClass />
          <ContentFunction />
          <aside>
            <SiteEditor />
            <ThemeEditor />
          </aside>
        </section>
      </main>
    );
  }
}

export default Main;
