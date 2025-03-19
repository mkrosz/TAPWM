using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PTesteClasses
{
    internal class Horista : Empregado
    {
        //se digitar prop e apertar tab, ele cria a propriedade bem mais fácil!
        public double SalarioHora { get; set; }
        public double NumeroHora { get; set; }
        public int DiasFalta { get; set; }

        //override indica sobreescrever
        public override double SalarioBruto()
        {
            return SalarioHora * NumeroHora;
        }

        public override int TempoTrabalho()
        {
            TimeSpan span =
                DateTime.Today.Subtract(DataEntradaEmpresa);
            return(Convert.ToInt32(span.Days - DiasFalta));
        }
    }
}
