namespace PTesteClasses
{
    partial class frmMensalista
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
            this.txtMatricula = new System.Windows.Forms.Label();
            this.txtNome = new System.Windows.Forms.Label();
            this.txtSalario = new System.Windows.Forms.Label();
            this.txtData = new System.Windows.Forms.Label();
            this.textMatricula = new System.Windows.Forms.TextBox();
            this.btnInstaciar1 = new System.Windows.Forms.Button();
            this.btnInstaciar2 = new System.Windows.Forms.Button();
            this.textNome = new System.Windows.Forms.TextBox();
            this.textSalario = new System.Windows.Forms.TextBox();
            this.textData = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // txtMatricula
            // 
            this.txtMatricula.AutoSize = true;
            this.txtMatricula.Location = new System.Drawing.Point(69, 76);
            this.txtMatricula.Name = "txtMatricula";
            this.txtMatricula.Size = new System.Drawing.Size(77, 20);
            this.txtMatricula.TabIndex = 0;
            this.txtMatricula.Text = "Matricula:";
            // 
            // txtNome
            // 
            this.txtNome.AutoSize = true;
            this.txtNome.Location = new System.Drawing.Point(69, 134);
            this.txtNome.Name = "txtNome";
            this.txtNome.Size = new System.Drawing.Size(55, 20);
            this.txtNome.TabIndex = 1;
            this.txtNome.Text = "Nome:";
            // 
            // txtSalario
            // 
            this.txtSalario.AutoSize = true;
            this.txtSalario.Location = new System.Drawing.Point(69, 188);
            this.txtSalario.Name = "txtSalario";
            this.txtSalario.Size = new System.Drawing.Size(117, 20);
            this.txtSalario.TabIndex = 2;
            this.txtSalario.Text = "Salário Mensal:";
            // 
            // txtData
            // 
            this.txtData.AutoSize = true;
            this.txtData.Location = new System.Drawing.Point(69, 248);
            this.txtData.Name = "txtData";
            this.txtData.Size = new System.Drawing.Size(199, 20);
            this.txtData.TabIndex = 3;
            this.txtData.Text = "Data Entrada na Empresa:";
            // 
            // textMatricula
            // 
            this.textMatricula.Location = new System.Drawing.Point(332, 76);
            this.textMatricula.Name = "textMatricula";
            this.textMatricula.Size = new System.Drawing.Size(100, 26);
            this.textMatricula.TabIndex = 4;
            // 
            // btnInstaciar1
            // 
            this.btnInstaciar1.AutoSize = true;
            this.btnInstaciar1.Location = new System.Drawing.Point(73, 334);
            this.btnInstaciar1.Name = "btnInstaciar1";
            this.btnInstaciar1.Size = new System.Drawing.Size(169, 111);
            this.btnInstaciar1.TabIndex = 5;
            this.btnInstaciar1.Text = "Instanciar Mensalista";
            this.btnInstaciar1.UseVisualStyleBackColor = true;
            this.btnInstaciar1.Click += new System.EventHandler(this.btnInstaciar1_Click);
            // 
            // btnInstaciar2
            // 
            this.btnInstaciar2.AutoSize = true;
            this.btnInstaciar2.Location = new System.Drawing.Point(310, 334);
            this.btnInstaciar2.Name = "btnInstaciar2";
            this.btnInstaciar2.Size = new System.Drawing.Size(328, 111);
            this.btnInstaciar2.TabIndex = 6;
            this.btnInstaciar2.Text = "Instanciar Mensalista \r\nPassando Parâmetros";
            this.btnInstaciar2.UseVisualStyleBackColor = true;
            this.btnInstaciar2.Click += new System.EventHandler(this.btnInstaciar2_Click);
            // 
            // textNome
            // 
            this.textNome.Location = new System.Drawing.Point(332, 128);
            this.textNome.Name = "textNome";
            this.textNome.Size = new System.Drawing.Size(306, 26);
            this.textNome.TabIndex = 7;
            // 
            // textSalario
            // 
            this.textSalario.Location = new System.Drawing.Point(332, 185);
            this.textSalario.Name = "textSalario";
            this.textSalario.Size = new System.Drawing.Size(150, 26);
            this.textSalario.TabIndex = 8;
            // 
            // textData
            // 
            this.textData.Location = new System.Drawing.Point(332, 245);
            this.textData.Name = "textData";
            this.textData.Size = new System.Drawing.Size(150, 26);
            this.textData.TabIndex = 9;
            // 
            // frmMensalista
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(716, 530);
            this.Controls.Add(this.textData);
            this.Controls.Add(this.textSalario);
            this.Controls.Add(this.textNome);
            this.Controls.Add(this.btnInstaciar2);
            this.Controls.Add(this.btnInstaciar1);
            this.Controls.Add(this.textMatricula);
            this.Controls.Add(this.txtData);
            this.Controls.Add(this.txtSalario);
            this.Controls.Add(this.txtNome);
            this.Controls.Add(this.txtMatricula);
            this.Name = "frmMensalista";
            this.Text = "FrmMensalista";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label txtMatricula;
        private System.Windows.Forms.Label txtNome;
        private System.Windows.Forms.Label txtSalario;
        private System.Windows.Forms.Label txtData;
        private System.Windows.Forms.TextBox textMatricula;
        private System.Windows.Forms.Button btnInstaciar1;
        private System.Windows.Forms.Button btnInstaciar2;
        private System.Windows.Forms.TextBox textNome;
        private System.Windows.Forms.TextBox textSalario;
        private System.Windows.Forms.TextBox textData;
    }
}