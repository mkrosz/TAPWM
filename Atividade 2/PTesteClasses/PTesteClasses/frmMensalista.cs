using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace PTesteClasses
{
    public partial class frmMensalista : Form
    {
        public frmMensalista()
        {
            InitializeComponent();
        }

        private void btnInstaciar1_Click(object sender, EventArgs e)
        {
            Mensalista objMensalista = new Mensalista();

            objMensalista.NomeEmpregado = textNome.Text;
            objMensalista.Matricula = Convert.ToInt32(textMatricula.Text);
            objMensalista.DataEntradaEmpresa = Convert.ToDateTime(textData.Text);
            objMensalista.SalarioMensal = Convert.ToDouble(textSalario.Text);

            MessageBox.Show("Nome: " + objMensalista.NomeEmpregado + "\n" +
                "Matrícula: " + objMensalista.Matricula + "\n" +
                "Tempo Trabalho: " + objMensalista.TempoTrabalho() + "\n" +
                "Salário Final: " + objMensalista.SalarioBruto().ToString("N2"));
        }

        private void btnInstaciar2_Click(object sender, EventArgs e)
        {
            Mensalista objMensalista = new Mensalista(
                Convert.ToInt32(textMatricula.Text),
                textNome.Text,
                Convert.ToDateTime(textData.Text),
                Convert.ToDouble(textSalario.Text));

            MessageBox.Show("Nome: " + objMensalista.NomeEmpregado + "\n" +
                "Matrícula: " + objMensalista.Matricula + "\n" +
                "Tempo Trabalho: " + objMensalista.TempoTrabalho() + "\n" +
                "Salário Final: " + objMensalista.SalarioBruto().ToString("N2"));

            MessageBox.Show("Empresa: " + Mensalista.Empresa);
        }
    }
}
