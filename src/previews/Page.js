import React from 'react';
import Hero from '../blocks/Hero';
import PageBuilder from '../components/PageBuilder';

export default class PagePreview extends React.Component {
  render() {
    const blocks = this.props.widgetsFor('blocks');

    const blocksUpdated = this.props
      .widgetsFor('blocks')
      .toJS()
      .map((block) => block.data);
    console.log('blocks', blocksUpdated);

    return (
      <div>
        <PageBuilder blocks={blocksUpdated} />
      </div>
    );
  }
}
