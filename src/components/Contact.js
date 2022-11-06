import { width } from '@mui/system'
import React from 'react'

export const Contact = () => {
  return (
    <div style={{textAlign: 'center', margin:'auto'}}>
     <aside>
            <header>
                <h2>My Profile</h2>
                <img src={require('../assets/image/persona_5_by_yakusokudayo_da3mu37-fullview.jpg')} style={{width:'10%'}}/>
            </header>
            <table border='1px' style={{margin:'auto',backgroundColor:'#000',color:"white",marginBottom:'10px'}}>
                <tr>
                    <th>Nama</th>
                    <td>I Komang Tri Cahya Bramantara</td>
                </tr>
                <tr>
                    <th>NIM</th>   
                    <td>320200401010</td>

                </tr>
                <tr>
                     <th>Prodi</th>
                    <td>Informatika</td>
                </tr>
            </table>
        </aside>
    </div>
  )
}
export default Contact
