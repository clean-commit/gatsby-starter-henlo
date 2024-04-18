import React from 'react'
import Form from '@/components/Form/Form'

export default class PagePreview extends React.Component {
  render() {
    const blocks = this.props.widgetsFor('rows').toJS()
    let blocksUpdated = []
    let hasBlocks = Array.isArray(blocks)
    if (hasBlocks) {
      blocksUpdated = blocks.map((block) => block.data)
    }

    return (
      <div>
        {hasBlocks ? (
          <div className="mx-auto max-w-2xl py-24">
            <Form
              data={{
                settings: {
                  resolver: 'Preview',
                  event_id: false,
                  success_msg: 'Thank you!',
                },
                rows: blocksUpdated,
              }}
              preview={true}
            />
          </div>
        ) : (
          <div class="flex items-center justify-center py-24 text-center">
            <h1>Add first block to start creating your form</h1>
          </div>
        )}
      </div>
    )
  }
}
