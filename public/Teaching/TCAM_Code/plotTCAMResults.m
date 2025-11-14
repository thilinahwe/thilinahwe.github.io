function plotTCAMResults()
% plotTCAMResults
% Uses workspace variables:
%   out.simout, Time, Disp, Temp, MaterialType ('CF' or 'Nylon')
% No inputs or outputs.

    % Pull variables from caller workspace
    out          = evalin('caller', 'out');
    Time         = evalin('caller', 'Time');
    Disp         = evalin('caller', 'Disp');
    Temp         = evalin('caller', 'Temp');
    MaterialType = evalin('caller', 'MaterialType');   % 'CF' or 'Nylon'

    % ------------------------------
    % Displacement Plot
    % ------------------------------
    fig1 = figure(1);
    plot(out.simout.Time, out.simout.Data(:,1), 'LineWidth', 1.5);
    hold on;
    plot(Time, Disp, '-', 'LineWidth', 1.5);
    hold off;

    legend('Simulation', 'experiment 1', 'experiment 2');
    xlabel('Time [s]');
    ylabel('Displacement [m]');
    ylim([min(Disp(:,1)) * 1.2, max(Disp(:,1)) * 1.2]);
    title('Displacement vs. Time');

    % ------------------------------
    % Temperature Plot
    % ------------------------------
    fig2 = figure(2);
    plot(out.simout.Time, out.simout.Data(:,2), 'LineWidth', 1.5);
    hold on;
    plot(Time, Temp, '-', 'LineWidth', 1.5);
    hold off;

    legend('Simulation', 'experiment 1', 'experiment 2');
    xlabel('Time [s]');
    ylabel('Temperature [C]');
    ylim([20, max(Temp(:,1)) * 1.1]);
    title('Temperature vs. Time');

    % ------------------------------
    % Save figures using MaterialType
    % ------------------------------
    if strcmpi(MaterialType, 'CF')
        print(fig1, 'disp_CF', '-dpng');
        print(fig2, 'temp_CF', '-dpng');
    elseif strcmpi(MaterialType, 'Nylon')
        print(fig1, 'disp_Ny', '-dpng');
        print(fig2, 'temp_Ny', '-dpng');
    else
        warning('Unknown MaterialType. Expected ''CF'' or ''Nylon''.');
    end
end
