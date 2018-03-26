import * as React from 'react'
import { InterceptTextBox } from './InterceptTextBox';

export class InterceptForm extends React.Component {
  componentWillMount(){
    this.props.handleExpandedRows(this.props.rowProps.row._index, this.props.tabId, this.props.rowProps.original.url, this.props.rowProps.original.method)
  }
  render(){
    return(
    <InterceptTextBox
    rowProps={this.props.rowProps.row}
    handleRespTextChange={this.props.handleRespTextChange}
    responseText={this.props.responseText}
    handleStatusCodeChange={this.props.handleStatusCodeChange}
    statusCodes={this.props.statusCodes}
    handleContentTypeChange={this.props.handleContentTypeChange}
    contentType={this.props.contentType} />
  )
  }
}