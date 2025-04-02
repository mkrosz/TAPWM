namespace PTesteClasses
{
    partial class frmHorista
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.textData = new System.Windows.Forms.TextBox();
            this.textSalarioHora = new System.Windows.Forms.TextBox();
            this.textNome = new System.Windows.Forms.TextBox();
            this.btnInstaciarHorista = new System.Windows.Forms.Button();
            this.textMatricula = new System.Windows.Forms.TextBox();
            this.txtData = new System.Windows.Forms.Label();
            this.txtNome = new System.Windows.Forms.Label();
            this.txtMatricula = new System.Windows.Forms.Label();
            this.txtSalarioHora = new System.Windows.Forms.Label();
            this.txtNumeroHoras = new System.Windows.Forms.Label();
            this.txtFaltas = new System.Windows.Forms.Label();
            this.textHoras = new System.Windows.Forms.TextBox();
            this.textFaltas = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // textData
            // 
            this.textData.Location = new System.Drawing.Point(320, 305);
            this.textData.Name = "textData";
            this.textData.Size = new System.Drawing.Size(217, 26);
            this.textData.TabIndex = 19;
            // 
            // textSalarioHora
            // 
            this.textSalarioHora.Location = new System.Drawing.Point(320, 184);
            this.textSalarioHora.Name = "textSalarioHora";
            this.textSalarioHora.Size = new System.Drawing.Size(100, 26);
            this.textSalarioHora.TabIndex = 18;
            // 
            // textNome
            // 
            this.textNome.Location = new System.Drawing.Point(320, 127);
            this.textNome.Name = "textNome";
            this.textNome.Size = new System.Drawing.Size(306, 26);
            this.textNome.TabIndex = 17;
            // 
            // btnInstaciarHorista
            // 
            this.btnInstaciarHorista.AutoSize = true;
            this.btnInstaciarHorista.Location = new System.Drawing.Point(275, 459);
            this.btnInstaciarHorista.Name = "btnInstaciarHorista";
            this.btnInstaciarHorista.Size = new System.Drawing.Size(169, 54);
            this.btnInstaciarHorista.TabIndex = 15;
            this.btnInstaciarHorista.Text = "Instanciar Horista";
            this.btnInstaciarHorista.UseVisualStyleBackColor = true;
            this.btnInstaciarHorista.Click += new System.EventHandler(this.btnInstaciarHorista_Click);
            // 
            // textMatricula
            // 
            this.textMatricula.Location = new System.Drawing.Point(320, 75);
            this.textMatricula.Name = "textMatricula";
            this.textMatricula.Size = new System.Drawing.Size(100, 26);
            this.textMatricula.TabIndex = 14;
            // 
            // txtData
            // 
            this.txtData.AutoSize = true;
            this.txtData.Location = new System.Drawing.Point(57, 308);
            this.txtData.Name = "txtData";
            this.txtData.Size = new System.Drawing.Size(199, 20);
            this.txtData.TabIndex = 13;
            this.txtData.Text = "Data Entrada na Empresa:";
            // 
            // txtNome
            // 
            this.txtNome.AutoSize = true;
            this.txtNome.Location = new System.Drawing.Point(57, 133);
            this.txtNome.Name = "txtNome";
            this.txtNome.Size = new System.Drawing.Size(55, 20);
            this.txtNome.TabIndex = 11;
            this.txtNome.Text = "Nome:";
            // 
            // txtMatricula
            // 
            this.txtMatricula.AutoSize = true;
            this.txtMatricula.Location = new System.Drawing.Point(57, 75);
            this.txtMatricula.Name = "txtMatricula";
            this.txtMatricula.Size = new System.Drawing.Size(77, 20);
            this.txtMatricula.TabIndex = 10;
            this.txtMatricula.Text = "Matricula:";
            // 
            // txtSalarioHora
            // 
            this.txtSalarioHora.AutoSize = true;
            this.txtSalarioHora.Location = new System.Drawing.Point(57, 190);
            this.txtSalarioHora.Name = "txtSalarioHora";
            this.txtSalarioHora.Size = new System.Drawing.Size(125, 20);
            this.txtSalarioHora.TabIndex = 20;
            this.txtSalarioHora.Text = "Salário por hora:";
            // 
            // txtNumeroHoras
            // 
            this.txtNumeroHoras.AutoSize = true;
            this.txtNumeroHoras.Location = new System.Drawing.Point(57, 250);
            this.txtNumeroHoras.Name = "txtNumeroHoras";
            this.txtNumeroHoras.Size = new System.Drawing.Size(143, 20);
            this.txtNumeroHoras.TabIndex = 21;
            this.txtNumeroHoras.Text = "Números de horas:";
            // 
            // txtFaltas
            // 
            this.txtFaltas.AutoSize = true;
            this.txtFaltas.Location = new System.Drawing.Point(57, 358);
            this.txtFaltas.Name = "txtFaltas";
            this.txtFaltas.Size = new System.Drawing.Size(110, 20);
            this.txtFaltas.TabIndex = 22;
            this.txtFaltas.Text = "Dias de faltas:";
            // 
            // textHoras
            // 
            this.textHoras.Location = new System.Drawing.Point(320, 247);
            this.textHoras.Name = "textHoras";
            this.textHoras.Size = new System.Drawing.Size(100, 26);
            this.textHoras.TabIndex = 23;
            // 
            // textFaltas
            // 
            this.textFaltas.Location = new System.Drawing.Point(320, 355);
            this.textFaltas.Name = "textFaltas";
            this.textFaltas.Size = new System.Drawing.Size(100, 26);
            this.textFaltas.TabIndex = 24;
            // 
            // frmHorista
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(717, 561);
            this.Controls.Add(this.textFaltas);
            this.Controls.Add(this.textHoras);
            this.Controls.Add(this.txtFaltas);
            this.Controls.Add(this.txtNumeroHoras);
            this.Controls.Add(this.txtSalarioHora);
            this.Controls.Add(this.textData);
            this.Controls.Add(this.textSalarioHora);
            this.Controls.Add(this.textNome);
            this.Controls.Add(this.btnInstaciarHorista);
            this.Controls.Add(this.textMatricula);
            this.Controls.Add(this.txtData);
            this.Controls.Add(this.txtNome);
            this.Controls.Add(this.txtMatricula);
            this.Name = "frmHorista";
            this.Text = "FrmHorista";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox textData;
        private System.Windows.Forms.TextBox textSalarioHora;
        private System.Windows.Forms.TextBox textNome;
        private System.Windows.Forms.Button btnInstaciarHorista;
        private System.Windows.Forms.TextBox textMatricula;
        private System.Windows.Forms.Label txtData;
        private System.Windows.Forms.Label txtNome;
        private System.Windows.Forms.Label txtMatricula;
        private System.Windows.Forms.Label txtSalarioHora;
        private System.Windows.Forms.Label txtNumeroHoras;
        private System.Windows.Forms.Label txtFaltas;
        private System.Windows.Forms.TextBox textHoras;
        private System.Windows.Forms.TextBox textFaltas;
    }
}