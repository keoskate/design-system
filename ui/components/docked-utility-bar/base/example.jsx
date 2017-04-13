// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { ButtonIcon } from '../../button-icons/base/example';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let UtilityPanel = props =>
  <section className={classNames('slds-utility-panel slds-grid slds-grid--vertical', props.className)} role="dialog" aria-labelledby="panel-heading-01">
    <header className="slds-utility-panel__header slds-grid slds-shrink-none">
      <div className="slds-media slds-media--center slds-size--1-of-1">
        <div className="slds-media__figure slds-m-right--x-small">
          <span className="slds-icon_container">
            <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="standard" symbol="call" />
          </span>
        </div>
        <div className="slds-media__body">
          <h2 id="panel-heading-01">{ props.header || 'Header' }</h2>
        </div>
      </div>
      <div className="slds-col--bump-left slds-shrink-none">
        <ButtonIcon
          className="slds-button--icon"
          symbol="minimize_window"
          assistiveText="Close Panel"
          title="Close Panel"
        />
      </div>
    </header>
    <div className="slds-utility-panel__body">
      { props.children }
    </div>
  </section>;

export let UtilityBarItem = props =>
  <li className={ classNames(
    'slds-utility-bar__item',
    { 'slds-has-notification': props.notification },
    props.className
  )}>
    <button
      className={classNames(
        'slds-button slds-utility-bar__action',
        { 'slds-is-active': props.active }
      )}
      aria-pressed={ props.active ? true : false }
    >
      { props.notification ?
        <abbr className="slds-indicator--unread" title="Unread Item" aria-label="Unread Item">
          <span className="slds-assistive-text">●</span>
        </abbr>
      : null }
      <SvgIcon
        className="slds-button__icon slds-button__icon--left"
        sprite="utility"
        symbol={ props.symbol }
      />
      <span className="slds-utility-bar__text">
        { props.children }
      </span>
    </button>
  </li>;

export let UtilityBar = props =>
  <footer className="slds-utility-bar_container" aria-label="Utility Bar">
    <h2 className="slds-assistive-text">Utility Bar</h2>
    <ul className="slds-utility-bar">
      { props.children }
    </ul>
    { props.panel }
  </footer>;

const PanelOpen = (
  <UtilityPanel className="slds-is-open" header="Call">
    <div className="slds-align--absolute-center">Utility Panel Body</div>
  </UtilityPanel>
);

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export const Context = props =>
  <div style={{ height: '540px' }}>
    {props.children}
  </div>;

export default (
  <UtilityBar
    panel={
      <UtilityPanel header="Call">
        <div className="slds-align--absolute-center">Utility Panel Body</div>
      </UtilityPanel>
    }
  >
    <UtilityBarItem symbol="call">Call</UtilityBarItem>
    <UtilityBarItem symbol="clock">History</UtilityBarItem>
    <UtilityBarItem symbol="note">Notes</UtilityBarItem>
    <UtilityBarItem symbol="omni_channel">
      <span className="slds-m-bottom--xxx-small">Online</span>
      <span>Omni-Channel</span>
    </UtilityBarItem>
  </UtilityBar>
);

export let states = [
  {
    id: 'open',
    label: 'Panel Open',
    element:
      <UtilityBar panel={PanelOpen}>
        <UtilityBarItem symbol="call" active>Call</UtilityBarItem>
        <UtilityBarItem symbol="clock">History</UtilityBarItem>
        <UtilityBarItem symbol="note">Notes</UtilityBarItem>
        <UtilityBarItem symbol="omni_channel">
          <span className="slds-m-bottom--xxx-small">Online</span>
          <span>Omni-Channel</span>
        </UtilityBarItem>
      </UtilityBar>
  },
  {
    id: 'item-active',
    label: 'Item Active',
    element:
      <UtilityBar>
        <UtilityBarItem symbol="call" active>Call</UtilityBarItem>
        <UtilityBarItem symbol="clock">History</UtilityBarItem>
        <UtilityBarItem symbol="note">Notes</UtilityBarItem>
        <UtilityBarItem symbol="omni_channel">
          <span className="slds-m-bottom--xxx-small">Online</span>
          <span>Omni-Channel</span>
        </UtilityBarItem>
      </UtilityBar>
  },
  {
    id: 'notification',
    label: 'Item has notification',
    element:
      <UtilityBar>
        <UtilityBarItem symbol="call">Call</UtilityBarItem>
        <UtilityBarItem symbol="clock">History</UtilityBarItem>
        <UtilityBarItem symbol="note">Notes</UtilityBarItem>
        <UtilityBarItem symbol="omni_channel" notification={true}>
          <span className="slds-m-bottom--xxx-small">Online</span>
          <span>Omni-Channel</span>
        </UtilityBarItem>
      </UtilityBar>
  }
];
