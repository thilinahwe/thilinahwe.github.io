function loadTCAMParameters(MaterialType)
% loadTCAMParameters  Loads TCAM parameter sets directly into the workspace.
%
%   loadTCAMParameters('CF')
%   loadTCAMParameters('Nylon')
%
%   Loads parameters for Simulink or MATLAB into the caller workspace, 
%   without returning variables.

    MaterialType = string(MaterialType);

    switch lower(MaterialType)
        case 'cf'
            % Load dataset
            load("ME6130_Dataset_CF.mat", "Time", "Disp", "Temp");
            % Assign constants
            V1 = 15;                   
            R  = 17.0;                 
            Ra = 40e6;                 
            Ct = 0.47;                 
            xi = 0.105;                
            CTE = 6.1e-5;              
            r0 = 0.29e-3;              
            S  = 0.25;                 
            n = 120;                   
            m = 50e-3;                 
            Ex = 6.75e9;               
            Gyz = 8.8e7;
            Material = 1;

        case 'nylon'
            % Load dataset
            load("ME6130_Dataset_Ny.mat", "Time", "Disp", "Temp");
            % Assign constants
            V1 = 30;                   
            R  = 95.0;                 
            Ra = 20e6;                 
            Ct = 0.65;                 
            xi = 0.1218;               
            CTE = 2.4e-4;              
            r0 = 0.4e-3;               
            S  = 0.50;                 
            n = 240;                   
            m = 400e-3;                
            Ex = 1.408e10;             
            Gyz = 2.18e8;
            Material = 2;

        otherwise
            error("MaterialType must be 'CF' or 'Nylon'");
    end

    % Shared constants
    T_sample = 0.05;
    t1 = 4;
    Tamb = 25;
    g = 9.81;

    % Geometry / stiffness calculations
    q = 2*pi*n/S;
    B_ = Ex*pi*r0^4/4;
    C_ = Gyz*pi*r0^4/2;
    cosbeta_ = 1 - (1/(B_ - C_)) * (q*B_*C_/sqrt(B_*m*g) - 2*C_);
    rho = sin(acos(cosbeta_)) / sqrt(m*g/B_);

    % Export all variables to caller workspace
    assignin('caller', 'Time', Time);
    assignin('caller', 'Disp', Disp);
    assignin('caller', 'Temp', Temp);

    assignin('caller', 'V1', V1);
    assignin('caller', 'R', R);
    assignin('caller', 'Ra', Ra);
    assignin('caller', 'Ct', Ct);
    assignin('caller', 'xi', xi);
    assignin('caller', 'CTE', CTE);
    assignin('caller', 'r0', r0);
    assignin('caller', 'S', S);
    assignin('caller', 'n', n);
    assignin('caller', 'm', m);
    assignin('caller', 'Ex', Ex);
    assignin('caller', 'Gyz', Gyz);

    assignin('caller', 'T_sample', T_sample);
    assignin('caller', 't1', t1);
    assignin('caller', 'Tamb', Tamb);
    assignin('caller', 'g', g);

    assignin('caller', 'q', q);
    assignin('caller', 'B_', B_);
    assignin('caller', 'C_', C_);
    assignin('caller', 'cosbeta_', cosbeta_);
    assignin('caller', 'rho', rho);
    assignin('caller', 'Material', Material);

    fprintf("✔ Parameters loaded for %s\n", MaterialType);
end
