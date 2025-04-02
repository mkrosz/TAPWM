using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PTesteClasses
{
    abstract class Empregado
    {
        //aqui vamos criar os atributos e propriedades
        //para ser mais didático 

        private int matricula; //atributos
        private string nomeEmpregado;
        private DateTime dataEntradaEmpresa;


        public int Matricula //propriedade
        {
            get { return matricula; }
            set { matricula = value; }
        }

        public string NomeEmpregado
        {
            get { return nomeEmpregado; }
            set { nomeEmpregado = value; }
        }

        public DateTime DataEntradaEmpresa
        {
            get { return dataEntradaEmpresa; }
            set { dataEntradaEmpresa = value; }
        }

        public virtual int TempoTrabalho()
        {
            //representa um intervalo de tempo
            //O Time Sapn guarda intervalo de tempo!
            TimeSpan span =
            DateTime.Today.Subtract(DataEntradaEmpresa);
            return(span.Days);
        }
        public abstract double SalarioBruto();

        //Isso é um construtor
        public Empregado()
        {
            System.Windows.Forms.MessageBox.Show("Aqui é empregado");
        }

        public static String Empresa = "ADS WEB Desenvolvimento de Software";

        //public Empregado(int matricula, string nomeEmpregado, DateTime dataEntradaEmpresa, int matricula, string nomeEmpregado, DateTime dataEntradaEmpresa)
        //{
        //    Matricula = matricula;
        //    NomeEmpregado = nomeEmpregado;
        //    DataEntradaEmpresa = dataEntradaEmpresa;
        //    Matricula = matricula;
        //    NomeEmpregado = nomeEmpregado;
        //    DataEntradaEmpresa = dataEntradaEmpresa;
        //}
    }
}
