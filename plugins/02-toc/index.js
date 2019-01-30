const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelBody, PanelRow } = wp.components;

import icon from "./icon";
import "./plugin.scss";

const TableOfContents = props => {
  return (
    <Fragment>
      <PluginSidebarMoreMenuItem target="jsforwpadvgb-toc">
        {__("Table of Contents", "jsforwpadvblocks")}
      </PluginSidebarMoreMenuItem>
      <PluginSidebar
        name="jsforwpadvgb-toc"
        title={__("Table of Contents", "jsforwpadvblocks")}
      >
        <PanelBody>
          <PanelRow>{__("Table of Contents", "jsforwpadvblocks")}</PanelRow>
        </PanelBody>
      </PluginSidebar>
    </Fragment>
  );
};

registerPlugin("jsforwpadvgb-toc", {
  icon,
  render: TableOfContents
});