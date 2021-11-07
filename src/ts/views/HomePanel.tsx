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
    todoText: string;
    isCargando: boolean;
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

const Moralis = require('moralis');
const serverUrl = "https://soli2aousjbm.usemoralis.com:2053/server";
const appId = "EYoSle1CvNFbGig2fgrKzv5zsCcjjn2PYn8W2uWO";

Moralis.start({ serverUrl, appId });
import * as UI from '@sproutch/ui';
import ImageSource from 'modules/images';
import CurrentUserStore from '../stores/CurrentUserStore';
import TodosStore from '../stores/TodosStore';
export default class HomePanel extends RX.Component<CreateTodoPanelProps, CreateTodoPanelState> {


    protected _buildState(props: CreateTodoPanelProps, initState: boolean): Partial<CreateTodoPanelState> {
        const partialState: Partial<CreateTodoPanelState> = {

            isCargando: CurrentUserStore.getCargando(),
        };
        return partialState;
    }


    _onPressTodo = async (e: RX.Types.SyntheticEvent) => {
        e.stopPropagation()
        this.isCargando = true
        CurrentUserStore.setCargando(true)

        await Moralis.enableWeb3()
        let user = await Moralis.User.current()
        if (!user) {

            try {

                await Moralis.switchNetwork('0x4');
                await Moralis.authenticate().then(async (user: any) => {
                    let username = user.get('username')
                    let createdAt = user.get('createdAt')
                    let sessionToken = user.get('sessionToken')
                    let updatedAt = user.get('updatedAt')
                    let address = user.get('ethAddress')


                    let avatar = user.get('avatar')

                    const items = await Moralis.Cloud.run('getAllItemsByUser', { ownerAddress: address });
                    console.log('entro', JSON.stringify(items))
                    await TodosStore.setTodos(items)

                    if (avatar === undefined) {


                        CurrentUserStore.setUser(username, '', createdAt, sessionToken, updatedAt, '', address)
                        CurrentUserStore.setLogin(true)

                    } else {

                        CurrentUserStore.setUser(username, '', createdAt, sessionToken, updatedAt, avatar, address)
                        CurrentUserStore.setLogin(true)
                    }

                    this.isCargando = false
                    CurrentUserStore.setCargando(false)
                    return
                })
                return
            } catch {

                CurrentUserStore.setLogin(false)
                this.isCargando = false
                CurrentUserStore.setCargando(false)
                return
            }

        }
        CurrentUserStore.setCargando(false)
        this.isCargando = false
        CurrentUserStore.setLogin(true)
        return
    };
    isCargando = false
    render() {
        return (
            <RX.View useSafeInsets={true} style={[_styles.container, Styles.statusBarTopMargin, {}]}>

                <RX.Image resizeMethod={'resize'} resizeMode={'cover'} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} source={ImageSource.background} >
                    <RX.View style={{ flex: 20, alignSelf: 'stretch', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} />
                    <RX.View style={{ flex: 40, alignSelf: 'stretch', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} />
                    <RX.View style={{ flex: 20, alignSelf: 'stretch', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                        {this.isCargando ? <RX.View style={{ width: 250, justifyContent: 'center', alignItems: 'center', }}> <UI.Spinner color='white' size='medium' /></RX.View> :
                            <UI.Button onPress={this._onPressTodo} style={{ root: [{ marginTop: 25, height: 50, width: 400, }], content: [{ borderColor: 'green', backgroundColor: 'yellow', borderWidth: 3, borderRadius: 11, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }], label: _styles.label }
                            } elevation={4} variant={"outlined"} label="PRE SALE NOW!" />}
                    </RX.View >
                </RX.Image>
            </RX.View >
        );
    }

}
