import React,{useContext} from 'react'
import { Button } from 'antd'
import { SettingContext } from '../Contexts/SettingContext'

function Settings() {

    const { changeMode } = useContext(SettingContext);

  return (
    <div style={{textAlign:'left', paddingLeft:100}}>
            <Button onClick={changeMode}>
                Dark MODE
             </Button>
    </div>
  )
}

export default Settings
