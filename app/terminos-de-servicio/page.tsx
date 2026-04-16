export default function TermsOfServicePage() {
  return (
    <main className="w-full bg-background">
      {/* Header */}
      <section className="border-b border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-lg text-foreground/60">
            Plataforma y Servicios Financieros de Simpler
          </p>
          <p className="text-sm text-foreground/40 mt-4">
            Versión 1.0 | La Paz, Bolivia
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Important Notice */}
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
            <p className="text-sm text-foreground font-semibold mb-2">⚠️ AVISO IMPORTANTE</p>
            <p className="text-foreground/80">
              Al registrarse, acceder o utilizar los servicios de Simpler, el Usuario declara haber leído, 
              comprendido y aceptado íntegramente los presentes Términos y Condiciones. Si no está de acuerdo 
              con alguna de las disposiciones aquí contenidas, deberá abstenerse de utilizar la Plataforma.
            </p>
          </div>

          {/* Section I */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              SECCIÓN I – IDENTIFICACIÓN DE LAS PARTES Y MARCO LEGAL
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Artículo 1. IDENTIFICACIÓN DEL PROVEEDOR DE SERVICIOS
                </h3>
                <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-foreground/60">Razón Social</p>
                      <p className="font-semibold text-foreground">SIMPLER TECNOLOGÍA FINANCIERA S.R.L.</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Tipo de Entidad</p>
                      <p className="font-semibold text-foreground">Empresa de Tecnología Financiera (ETF)</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Domicilio</p>
                      <p className="font-semibold text-foreground">Ciudad de La Paz, Bolivia</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Correo</p>
                      <p className="font-semibold text-foreground">contacto@simpler.bo</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Sitio Web</p>
                      <p className="font-semibold text-foreground">www.simpler.bo</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Artículo 2. MARCO LEGAL Y REGULATORIO
                </h3>
                <p className="text-foreground/80 mb-4">
                  Simpler desarrolla sus actividades en el marco del ordenamiento jurídico vigente en el Estado 
                  Plurinacional de Bolivia, encontrándose sujeta a la supervisión y regulación de la Autoridad de 
                  Supervisión del Sistema Financiero (ASFI), conforme a las siguientes normas principales:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Ley N° 393 de Servicios Financieros, de 21 de agosto de 2013, y sus reglamentos.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Disposiciones del Banco Central de Bolivia (BCB) en materia de sistemas de pago.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Decreto Supremo N° 5384 de 7 de mayo de 2025 sobre plataformas de pago.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Resoluciones Administrativas ASFI N° 821 y N° 885 sobre administradoras de pasarelas de pagos.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Ley N° 164 de Telecomunicaciones y Tecnologías de Información y Comunicación.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Artículo 3. DEFINICIONES
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="py-3 px-3 font-semibold text-foreground w-1/3 bg-card">Simpler/Plataforma</td>
                        <td className="py-3 px-3 text-foreground/80">SIMPLER TECNOLOGÍA FINANCIERA S.R.L. y/o la aplicación móvil y plataforma web de su titularidad.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-foreground bg-card">Usuario/Cliente</td>
                        <td className="py-3 px-3 text-foreground/80">Persona natural o jurídica que se registra y utiliza los servicios de la Plataforma.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-foreground bg-card">ETF</td>
                        <td className="py-3 px-3 text-foreground/80">Empresa de Tecnología Financiera autorizada por la ASFI para prestar servicios financieros digitales.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-foreground bg-card">Servicios</td>
                        <td className="py-3 px-3 text-foreground/80">Conjunto de servicios financieros y complementarios ofrecidos por Simpler a través de su Plataforma.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-foreground bg-card">Billetera Digital</td>
                        <td className="py-3 px-3 text-foreground/80">Instrumento de pago electrónico que permite al Usuario almacenar saldo y realizar transacciones.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section II */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              SECCIÓN II – REGISTRO, APERTURA DE CUENTA Y ONBOARDING
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Artículo 4. REQUISITOS DE REGISTRO
                </h3>
                <p className="text-foreground/80 mb-4">
                  Para acceder a los servicios de Simpler, el interesado deberá completar el proceso de registro 
                  en la Plataforma, cumpliendo los siguientes requisitos:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Ser persona natural mayor de dieciocho (18) años de edad, o persona jurídica legalmente constituida en Bolivia.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Presentar documento de identidad vigente: Cédula de Identidad boliviana para nacionales, o pasaporte/carnet de extranjería para ciudadanos extranjeros.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Proporcionar un número de teléfono celular activo y una dirección de correo electrónico válida.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Superar satisfactoriamente el proceso de verificación de identidad (KYC - Know Your Customer) requerido por Simpler.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>No estar incluido en listas de control de lavado de activos o financiamiento del terrorismo.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Artículo 5. PROCESO DE VERIFICACIÓN DE IDENTIDAD (KYC)
                </h3>
                <p className="text-foreground/80 mb-4">
                  En cumplimiento de las obligaciones establecidas en el Título VIII de la Ley N° 393 y las 
                  disposiciones de la Unidad de Investigaciones Financieras (UIF), Simpler implementa un proceso 
                  de debida diligencia para conocer a sus clientes. Este proceso puede incluir:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Verificación biométrica mediante reconocimiento facial o dactilar.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Validación del documento de identidad contra bases de datos oficiales.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Declaración jurada del origen lícito de los fondos.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Actualización periódica de información del perfil del Usuario.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section III */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              SECCIÓN III – DESCRIPCIÓN DE LOS SERVICIOS
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Artículo 8. SERVICIOS OFRECIDOS
                </h3>
                <p className="text-foreground/80 mb-4">
                  Simpler, en su calidad de Empresa de Tecnología Financiera (ETF), ofrece los siguientes 
                  servicios a través de su Plataforma:
                </p>
                <div className="space-y-3">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-1">Billetera Digital</p>
                    <p className="text-sm text-foreground/80">Emisión y administración de billetera digital que permite almacenar, gestionar y utilizar fondos en moneda nacional.</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-1">Transferencias P2P</p>
                    <p className="text-sm text-foreground/80">Envío y recepción de dinero entre Usuarios de la Plataforma de forma inmediata y sin costo adicional.</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-1">Pago a Comercios</p>
                    <p className="text-sm text-foreground/80">Pago de bienes y servicios en comercios afiliados a la red Simpler mediante código QR, enlace de pago u otros mecanismos.</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-1">Recargas y Retiros</p>
                    <p className="text-sm text-foreground/80">Recarga de saldo mediante tarjeta de débito/crédito, transferencia bancaria u otros medios. Retiro de fondos a cuenta bancaria del titular.</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-1">Pasarela de Pagos</p>
                    <p className="text-sm text-foreground/80">Procesamiento de cobros en línea para comercios y emprendedores, facilitando la aceptación de pagos digitales.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Artículo 9. LÍMITES OPERATIVOS
                </h3>
                <p className="text-foreground/80 mb-4">
                  Simpler establece límites operativos para las transacciones realizadas en la Plataforma, 
                  de conformidad con la normativa ASFI y BCB vigente:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-card border-b border-border">
                        <th className="text-left py-3 px-3 font-semibold text-foreground">Operación</th>
                        <th className="text-left py-3 px-3 font-semibold text-foreground">Nivel Básico</th>
                        <th className="text-left py-3 px-3 font-semibold text-foreground">Nivel Verificado</th>
                        <th className="text-left py-3 px-3 font-semibold text-foreground">Nivel Comercio</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="py-3 px-3 text-foreground/80">Transferencia diaria</td>
                        <td className="py-3 px-3 text-foreground/80">Bs. 2.000</td>
                        <td className="py-3 px-3 text-foreground/80">Bs. 10.000</td>
                        <td className="py-3 px-3 text-foreground/80">Bs. 50.000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 text-foreground/80">Transferencia mensual</td>
                        <td className="py-3 px-3 text-foreground/80">Bs. 10.000</td>
                        <td className="py-3 px-3 text-foreground/80">Bs. 50.000</td>
                        <td className="py-3 px-3 text-foreground/80">Sin límite*</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 text-foreground/80">Saldo máximo en billetera</td>
                        <td className="py-3 px-3 text-foreground/80">Bs. 5.000</td>
                        <td className="py-3 px-3 text-foreground/80">Bs. 20.000</td>
                        <td className="py-3 px-3 text-foreground/80">Bs. 100.000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 text-foreground/80">Retiro diario</td>
                        <td className="py-3 px-3 text-foreground/80">Bs. 1.000</td>
                        <td className="py-3 px-3 text-foreground/80">Bs. 5.000</td>
                        <td className="py-3 px-3 text-foreground/80">Bs. 20.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-foreground/60 mt-2">* Sujeto a las condiciones del contrato comercial y aprobación de la ASFI.</p>
              </div>
            </div>
          </section>

          {/* Section IV */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              SECCIÓN IV – COMISIONES, TARIFAS Y CARGOS
            </h2>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Artículo 11. RÉGIMEN DE COMISIONES
              </h3>
              <p className="text-foreground/80 mb-4">
                Las comisiones y tarifas aplicables a los servicios de Simpler se establecen de conformidad con 
                el Artículo 60 de la Ley N° 393. La estructura tarifaria vigente es la siguiente:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-card border-b border-border">
                      <th className="text-left py-3 px-3 font-semibold text-foreground">Servicio</th>
                      <th className="text-left py-3 px-3 font-semibold text-foreground">Tarifa/Comisión</th>
                      <th className="text-left py-3 px-3 font-semibold text-foreground">Condiciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 px-3 text-foreground/80">Apertura y mantenimiento de cuenta</td>
                      <td className="py-3 px-3 text-foreground/80 font-semibold">Gratuito</td>
                      <td className="py-3 px-3 text-foreground/80">Sin costo para el Usuario</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-foreground/80">Transferencias entre Usuarios</td>
                      <td className="py-3 px-3 text-foreground/80 font-semibold">Gratuito</td>
                      <td className="py-3 px-3 text-foreground/80">Hasta el límite permitido</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-foreground/80">Recarga desde tarjeta débito/crédito</td>
                      <td className="py-3 px-3 text-foreground/80 font-semibold">Hasta 1.5%</td>
                      <td className="py-3 px-3 text-foreground/80">Según red bancaria utilizada</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-foreground/80">Pago a comercios afiliados</td>
                      <td className="py-3 px-3 text-foreground/80 font-semibold">Gratuito para el Usuario</td>
                      <td className="py-3 px-3 text-foreground/80">Comisión al comercio</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-foreground/80">Retiro a cuenta bancaria</td>
                      <td className="py-3 px-3 text-foreground/80 font-semibold">Bs. 5 por operación</td>
                      <td className="py-3 px-3 text-foreground/80">Procesado en 1-2 días hábiles</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section V */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              SECCIÓN V – DERECHOS Y PROTECCIÓN DEL CONSUMIDOR FINANCIERO
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Artículo 13. DERECHOS DEL USUARIO
                </h3>
                <p className="text-foreground/80 mb-4">
                  En cumplimiento del Artículo 74 de la Ley N° 393, el Usuario de Simpler goza de los siguientes derechos:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-foreground">Acceso igualitario</p>
                      <p className="text-sm text-foreground/70">Acceder a los servicios sin discriminación.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-foreground">Servicios de calidad</p>
                      <p className="text-sm text-foreground/70">Recibir servicios en condiciones adecuadas a sus intereses.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-foreground">Información fidedigna</p>
                      <p className="text-sm text-foreground/70">Recibir información clara, comprensible y oportuna.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-foreground">Mecanismos de reclamo</p>
                      <p className="text-sm text-foreground/70">Acceder a canales de reclamo eficientes.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-foreground">Confidencialidad</p>
                      <p className="text-sm text-foreground/70">Que su información sea tratada con reserva.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Artículo 14. CANALES DE ATENCIÓN Y RECLAMOS
                </h3>
                <p className="text-foreground/80 mb-4">
                  Simpler pone a disposición del Usuario los siguientes canales de atención:
                </p>
                <div className="space-y-3">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-1">Chat en App</p>
                    <p className="text-sm text-foreground/80">Disponible 24/7 con respuesta en tiempo real</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-1">Correo Electrónico</p>
                    <p className="text-sm text-foreground/80">reclamos@simpler.bo – Respuesta en 48 horas hábiles</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-1">Formulario Web</p>
                    <p className="text-sm text-foreground/80">www.simpler.bo/reclamos</p>
                  </div>
                </div>
                <p className="text-foreground/80 mt-4 text-sm">
                  Simpler está obligada a emitir respuesta expresa e íntegra en un plazo máximo de quince (15) 
                  días hábiles. Si el Usuario no recibiera respuesta satisfactoria, podrá acudir a la Defensoría 
                  del Consumidor Financiero de la ASFI.
                </p>
              </div>
            </div>
          </section>

          {/* Section VI */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              SECCIÓN VI – CONFIDENCIALIDAD Y PROTECCIÓN DE DATOS PERSONALES
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Artículo 16. RECOLECCIÓN Y TRATAMIENTO DE DATOS
                </h3>
                <p className="text-foreground/80 mb-4">
                  Simpler recolecta y trata los datos personales del Usuario de conformidad con el derecho a la 
                  reserva y confidencialidad establecido en el Artículo 472 de la Ley N° 393. Los datos recopilados incluyen:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Datos de identificación: nombre completo, número de CI/pasaporte, fecha de nacimiento.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Datos de contacto: número de teléfono celular, dirección de correo electrónico.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Datos financieros: historial de transacciones, saldos y movimientos en la Plataforma.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Datos biométricos: para verificación de identidad, tratados con el más alto nivel de seguridad.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Artículo 19. SEGURIDAD DE LA INFORMACIÓN
                </h3>
                <p className="text-foreground/80 mb-4">
                  Simpler implementa medidas técnicas, organizativas y de seguridad acordes con los estándares 
                  internacionales (PCI-DSS, ISO/IEC 27001) para proteger la información del Usuario. Estas medidas incluyen:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Cifrado de datos en tránsito y en reposo mediante protocolos TLS/SSL y AES-256.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Autenticación de doble factor (2FA) para acceso a la Cuenta Simpler.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Monitoreo continuo de transacciones para detección de actividades fraudulentas.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Controles de acceso estrictos al personal interno que gestiona datos sensibles.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer Info */}
          <div className="bg-card border border-border rounded-lg p-6 mt-12">
            <p className="text-sm text-foreground/60">
              Para más información sobre estos Términos y Condiciones, contáctenos a través de nuestros canales 
              de atención disponibles en la Plataforma o en www.simpler.bo
            </p>
            <p className="text-xs text-foreground/40 mt-4">
              Última actualización: {new Date().toLocaleDateString('es-BO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
