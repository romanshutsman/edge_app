using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using CefSharp;
using CefSharp.WinForms;

namespace MyUserControl
{
    public partial class UserControl1 : UserControl, PluginConnectorInterfacesLib.IPluginConnector, PluginConnectorInterfacesLib.IPluginConnector2
    {
        private ChromiumWebBrowser controlBrowser;

        public UserControl1()
        {
            InitializeComponent();

            CefSettings browserSettings = new CefSettings();

            browserSettings.MultiThreadedMessageLoop = true;
            browserSettings.LogSeverity = LogSeverity.Verbose;
            browserSettings.LogFile = "cef.log";
            browserSettings.RemoteDebuggingPort = 20480;
            browserSettings.BrowserSubprocessPath = @"C:\Users\taras\Desktop\Prototype\WindowsFormWithWeb\WindowsFormWithWeb\Output\Debug\CefSharp.BrowserSubprocess.exe";

            Cef.Initialize(browserSettings);

            controlBrowser = new ChromiumWebBrowser("http://localhost:4200/");

            panel1.Controls.Add(controlBrowser);
            controlBrowser.Dock = DockStyle.Fill;
        }

        public void MyDispose()
        {
            Cef.Shutdown();
        }

        public void Save()
        {
        }

        public void ResizeControl(int newWidth, int newHeight)
        {
            SuspendLayout();
            Width = newWidth;
            Height = newHeight;
            ResumeLayout();
        }

        public string GetTitle()
        {
            return "Test Designer";
        }

        public int GetInitialHeight()
        {
            return 660;
        }

        public int GetInitialWidth()
        {
            return 1330;
        }

        public int GetMinimumHeight()
        {
            return MinimumSize.Height;
        }

        public int GetMinimumWidth()
        {
            return MinimumSize.Width;
        }

        public bool Close()
        {
            MessageBox.Show("Closing");
            Cef.Shutdown();
            return true;
        }

        public void Initialize(PluginConnectorInterfacesLib.IPluginHostConnector pConnector, object pDispController,
            Array selectedStudioUIDs, Array selectedStudioObjectTypes, PluginConnectorInterfacesLib.lgxOrganizationalModels organizationalModels)
        {
            
        }

        public void InitializeEx(PluginConnectorInterfacesLib.IPluginHostConnector pConnector, object pDispController, string context)
        {
            
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //   var test =  MyDll.Class1.Start();
            controlBrowser.Load("http://localhost:4200/");
        }

        private void button2_Click(object sender, EventArgs e)
        {
            controlBrowser.Load("http://bing.com");
        }

        private void button3_Click(object sender, EventArgs e)
        {
            controlBrowser.BackColor = Color.Red;
        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }
    }
}
