import React, { Component } from 'react';
import '../../css/style.css';
class Footer extends Component {
    render() {
      return (
        <footer className="Footer">
        <table>
            <tbody>
                <tr>
                <td className="btnAbout">About</td><td>Opinionitycs &copy; 2018</td><td className="btnSetting">Settings</td>
                </tr>
            </tbody>
        </table>
        </footer>
      );
    }
}

export default Footer;