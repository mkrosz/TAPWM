using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PTesteClasses
{
    internal class Mensalista : Empregado
    {
        public Double SalarioMensal { get; set; }

        //sobreescrevendo o método, isso é poliformismo
        public override double SalarioBruto()
        {
            return SalarioMensal;
        }

        //Digite ctor e de dois tabs par criar um contrutor de forma mais ági
        public Mensalista()
        {
            System.Windows.Forms.MessageBox.Show("Aqui é mensalista");
        }

        public Mensalista(int matx, string nomex, DateTime datax, double salx)
        {
            this.NomeEmpregado = nomex;
            this.Matricula = matx;
            this.DataEntradaEmpresa = datax;
            this.SalarioMensal = salx;
        }
    }
}
