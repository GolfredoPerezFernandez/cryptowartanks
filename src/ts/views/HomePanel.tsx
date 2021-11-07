/**
* CreateTodoPanel.tsx
* Copyright: Microsoft 2017
*
* The Todo item edit view.
*/

import * as RX from 'reactxp';

import { Colors, Fonts, FontSizes, Styles } from '../app/Styles';
interface CreateTodoPanelProps extends RX.CommonProps {
}

interface CreateTodoPanelState {
    todoText?: string;
}

const _styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch',
    }),
    label: RX.Styles.createTextStyle({
        font: Fonts.displayBold,
        fontSize: FontSizes.size20,
        color: 'black',
    }),
    todoText: RX.Styles.createTextStyle({
        margin: 8,
        fontSize: FontSizes.size16,
        alignSelf: 'stretch',
        color: Colors.black,
        backgroundColor: 'transparent',
    }),
    editTodoItem: RX.Styles.createTextInputStyle({
        margin: 8,
        height: 32,
        paddingHorizontal: 4,
        fontSize: FontSizes.size16,
        alignSelf: 'stretch',
    }),
    buttonContainer: RX.Styles.createViewStyle({
        margin: 8,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }),
};

import * as UI from '@sproutch/ui';
import ImageSource from 'modules/images';
export default class HomePanel extends RX.Component<CreateTodoPanelProps, CreateTodoPanelState> {
    render() {
        return (
            <RX.View useSafeInsets={true} style={[_styles.container, Styles.statusBarTopMargin, {}]}>

                <RX.Image resizeMethod={'resize'} resizeMode={'cover'} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} source={ImageSource.background} >
                    <RX.View style={{ flex: 20, alignSelf: 'stretch', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} />
                    <RX.View style={{ flex: 40, alignSelf: 'stretch', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} />
                    <RX.View style={{ flex: 20, alignSelf: 'stretch', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <UI.Button onPress={() => null} style={{ root: [{ marginTop: 25, height: 50, width: 400, }], content: [{ borderColor: 'green', backgroundColor: 'yellow', borderWidth: 3, borderRadius: 11, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }], label: _styles.label }
                        } elevation={4} variant={"outlined"} label="PRE SALE NOW!" />
                    </RX.View >
                </RX.Image>
            </RX.View >
        );
    }

}
