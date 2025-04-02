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
    public partial class frmHorista : Form
    {
        public frmHorista()
        {
            InitializeComponent();
        }

        private void btnInstaciarHorista_Click(object sender, EventArgs e)
        {
            //Criando o objeto, instanciando o objeto
            Horista objhorista = new Horista();

            objhorista.NomeEmpregado = textNome.Text;
            objhorista.Matricula = Convert.ToInt32(textMatricula.Text);
            objhorista.SalarioHora = Convert.ToDouble(textSalarioHora.Text);
            objhorista.NumeroHora = Convert.ToDouble(textHoras.Text);
            objhorista.DataEntradaEmpresa = Convert.ToDateTime(textData.Text);
            objhorista.DiasFalta = Convert.ToInt32(textFaltas.Text);

            //Mostrando valores
            MessageBox.Show("Nome: " + objhorista.NomeEmpregado +
                "\nMatrícula: " + objhorista.Matricula +
                "\nTempo de Trabalho: " + objhorista.TempoTrabalho() +
                "\nSalário: " + objhorista.SalarioBruto().ToString("N2"));

        }
    }
}
