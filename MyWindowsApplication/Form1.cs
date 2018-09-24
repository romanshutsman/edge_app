using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MyWindowsApplication
{
    public partial class Form1 : Form
    {
        MyUserControl.UserControl1 aa = new MyUserControl.UserControl1();

        public Form1()
        {
            InitializeComponent();

            

            Controls.Add(aa);
            aa.Dock = DockStyle.Fill;
        }

        private void Form1_FormClosing(object sender, System.Windows.Forms.FormClosingEventArgs e)
        {
            aa.MyDispose();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
}
