import React, { Component } from "react";
import SlidingPane from "react-sliding-pane";

class ArtworkInfosPane extends Component {
  componentDidMount() {
    // const { assetsFolderId, createAssetsFolder } = this.props;
    // if (assetsFolderId)
    //   this.getAssetsFilesAndFolderData();
    // else {
    //   createAssetsFolder(urlEventId(), { name: `photo-gallery-${moment().format()}` });
    //   this.isAssetsFolderCreated = true;
    // }
  }

  getAssetsFilesAndFolderData() {
    // const { assetsFolderId, fetchAssetsFolder, fetchAssets } = this.props;
    // fetchAssetsFolder(urlEventId(), assetsFolderId);
    // fetchAssets(urlEventId(), assetsFolderId);
  }

  componentDidUpdate() {}

  render() {
    const { isOpen, onClose } = this.props;

    return (
      <SlidingPane
        isOpen={isOpen}
        title={"*title"}
        subtitle={"subtitle"}
        from="right"
        width="100%"
        onRequestClose={onClose}
        // className="width-100-xs width-80-sm"
      >
        {/* <AssetsGrid assetsFolderId={id} assets={assets} deleteAsset={deleteAsset} updateAsset={updateAsset} createAsset={createAsset} /> */}
      </SlidingPane>
    );
  }
}

export default ArtworkInfosPane;
