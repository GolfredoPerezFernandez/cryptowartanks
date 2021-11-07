
import { Fonts, FontSizes } from '../app/Styles';


const _styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    backgroundColor: 'transparent',
  }),
  editTodoItem: RX.Styles.createTextInputStyle({
    margin: 8,
    width: 700,
    height: 32,
    paddingHorizontal: 4,
    fontSize: FontSizes.size16,
    alignSelf: 'stretch',
  }),
  editTodoItem2: RX.Styles.createTextInputStyle({
    margin: 8,
    width: 300,
    height: 32,
    paddingHorizontal: 4,
    fontSize: FontSizes.size16,
    alignSelf: 'stretch',
  }),
  buttonContainer: RX.Styles.createViewStyle({
    margin: 8,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  grid: RX.Styles.createViewStyle({
    maxWidth: 1024,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#eee"
  }),
  chart: RX.Styles.createViewStyle({
    backgroundColor: "white",
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center'
  }),
  text1: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    color: 'white',
  }),
  text2: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 13,
    color: 'black',
  }),
  text3: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 13,
    color: '#9796CF',
  }),
  text4: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 13,
    color: 'white',
  }),
  label: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: FontSizes.size16,
    color: 'black',
  })
};

import * as RX from 'reactxp';

import { useMoralis } from 'react-moralis'
import { useEffect, useMemo, useState } from 'react';

import ImageSource from 'modules/images';
import * as UI from '@sproutch/ui';
export const CreateTodoHook = ({
  width,
  height,
  isTiny,
}: {
  width: number,
  height: number,
  isTiny: boolean
}) => {

  const {
    Moralis,
    user,
    isInitialized,
    logout,
    authenticate,
    enableWeb3,
    isAuthenticated,
    isWeb3Enabled,
  } = useMoralis()
  useEffect(() => {
    if (isInitialized) {
    }
  }, [])
  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled) {
      enableWeb3();
    } else {
      authenticate()
    }
  }, [isAuthenticated])
  const web3Account = useMemo(() => isAuthenticated && user?.get("accounts")[0],
    [user, isAuthenticated])


  return <RX.View style={{ flex: 1, margin: 20, flexDirection: 'row', alignSelf: 'stretch', }} >

    <RX.View style={{ flex: 33, padding: 40, borderRadius: 12, marginRight: 10, marginLeft: 10, borderWidth: 3, borderColor: 'green' }}>
      <RX.Image resizeMethod={'resize'} resizeMode={'contain'} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} source={ImageSource.box1} />
      <RX.Text style={[_styles.text1, { alignSelf: 'center' }]}>
        {'Buy'}
      </RX.Text>
      <UI.Button onPress={() => null} style={{ root: [{ marginTop: 10, height: 50, width: 150, }], content: [{ borderColor: 'green', backgroundColor: 'yellow', borderWidth: 3, borderRadius: 11, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }], label: _styles.label }
      } elevation={4} variant={"outlined"} label="0.1 BNB" />
    </RX.View>

    <RX.View style={{ flex: 33, padding: 40, borderRadius: 12, marginRight: 10, marginLeft: 10, borderWidth: 3, borderColor: 'purple' }}>
      <RX.Image resizeMethod={'resize'} resizeMode={'contain'} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} source={ImageSource.box2} />
      <RX.Text style={[_styles.text1, { alignSelf: 'center' }]}>
        {'Buy'}
      </RX.Text>
      <UI.Button onPress={() => null} style={{ root: [{ marginTop: 10, height: 50, width: 150, }], content: [{ borderColor: 'green', backgroundColor: 'yellow', borderWidth: 3, borderRadius: 11, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }], label: _styles.label }
      } elevation={4} variant={"outlined"} label="0.2 BNB" />
    </RX.View>

    <RX.View style={{ flex: 33, padding: 40, borderRadius: 12, marginRight: 10, marginLeft: 10, borderWidth: 3, borderColor: 'yellow' }}>

      <RX.Image resizeMethod={'resize'} resizeMode={'contain'} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} source={ImageSource.box3} />
      <RX.Text style={[_styles.text1, { alignSelf: 'center' }]}>
        {'Buy'}
      </RX.Text>
      <UI.Button onPress={() => null} style={{ root: [{ marginTop: 10, height: 50, width: 150, }], content: [{ borderColor: 'green', backgroundColor: 'yellow', borderWidth: 3, borderRadius: 11, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }], label: _styles.label }
      } elevation={4} variant={"outlined"} label="0.3 BNB" />
    </RX.View>

  </RX.View >


}

